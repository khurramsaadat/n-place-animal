'use client';

import { useEffect } from 'react';

interface LetterDisplayProps {
  letter: string;
  isGameActive?: boolean;
}

const LetterDisplay = ({ letter, isGameActive = false }: LetterDisplayProps) => {
  useEffect(() => {
    if (letter && isGameActive) {
      const utterance = new SpeechSynthesisUtterance(
        `Let's play Name Place Animal Thing. Letter ${letter}`
      );
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  }, [letter, isGameActive]);

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