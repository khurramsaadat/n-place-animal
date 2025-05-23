'use client';

import { useEffect } from 'react';

interface LetterDisplayProps {
  letter: string;
}

const LetterDisplay = ({ letter }: LetterDisplayProps) => {
  useEffect(() => {
    if (letter) {
      const utterance = new SpeechSynthesisUtterance(
        `Let's play Name Place Animal Thing. Letter ${letter}`
      );
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  }, [letter]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-1">
        <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
            {letter}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LetterDisplay; 