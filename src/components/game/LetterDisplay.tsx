'use client';

import { useEffect, useRef } from 'react';

interface LetterDisplayProps {
  letter: string;
  isGameActive?: boolean;
  onAnnouncementComplete?: () => void;
}

const LetterDisplay = ({ letter, isGameActive = false, onAnnouncementComplete }: LetterDisplayProps) => {
  const isAnnouncingRef = useRef(false);
  const hasAnnouncedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Helper function to ensure speech synthesis is ready
  const waitForSpeechSynthesis = async () => {
    if (!window.speechSynthesis) return false;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    // Wait for any previous speech to fully stop
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return true;
  };

  useEffect(() => {
    // Reset when game becomes inactive
    if (!isGameActive) {
      hasAnnouncedRef.current = false;
      isAnnouncingRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      return;
    }

    // Check conditions for announcement
    if (!letter || 
        letter === '?' || 
        hasAnnouncedRef.current || 
        isAnnouncingRef.current) {
      return;
    }

    const makeAnnouncement = async () => {
      try {
        // Wait for speech synthesis to be ready
        const isSpeechReady = await waitForSpeechSynthesis();
        if (!isSpeechReady) {
          console.error('Speech synthesis not available');
          return;
        }

        // Set announcing flag
        isAnnouncingRef.current = true;

        // Create utterance
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = `Letter ${letter}`;
        utterance.lang = 'en-US';
        utterance.rate = 0.85;
        utterance.volume = 1.0;
        utterance.pitch = 1.0;

        // Get voices
        let voices = window.speechSynthesis.getVoices();
        if (voices.length === 0) {
          await new Promise<void>((resolve) => {
            window.speechSynthesis.addEventListener('voiceschanged', () => {
              voices = window.speechSynthesis.getVoices();
              resolve();
            }, { once: true });
          });
        }

        // Select voice
        const englishVoice = voices.find(voice => 
          voice.lang.startsWith('en-') && !voice.localService
        ) || voices.find(voice => 
          voice.lang.startsWith('en-')
        );

        if (englishVoice) {
          utterance.voice = englishVoice;
        }

        // Create a promise that resolves when speech ends or errors
        await new Promise<void>((resolve, reject) => {
          utterance.onstart = () => {
            hasAnnouncedRef.current = true;
          };

          utterance.onend = () => {
            isAnnouncingRef.current = false;
            if (onAnnouncementComplete) {
              onAnnouncementComplete();
            }
            resolve();
          };

          utterance.onerror = (event) => {
            const error = event as SpeechSynthesisErrorEvent;
            if (error.error === 'interrupted') {
              resolve();
            } else {
              console.error('Speech synthesis error:', error.error);
              reject(error);
            }
          };

          // Start speaking after a short delay
          timeoutRef.current = setTimeout(() => {
            window.speechSynthesis.speak(utterance);
          }, 300);
        });

      } catch (error) {
        console.error('Error in speech synthesis:', error);
        isAnnouncingRef.current = false;
        if (onAnnouncementComplete) {
          onAnnouncementComplete();
        }
      }
    };

    // Make the announcement
    makeAnnouncement();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      isAnnouncingRef.current = false;
    };
  }, [letter, isGameActive, onAnnouncementComplete]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-1">
        <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
            {letter}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LetterDisplay; 