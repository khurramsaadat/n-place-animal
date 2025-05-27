'use client';

import { useState } from 'react';
import GameBoard from '@/components/game/GameBoard';
import HintPanel from '@/components/training/HintPanel';
import { TrainingProgressProvider } from '@/hooks/useTrainingProgress';

export default function TrainingPage() {
  const [currentLetter, setCurrentLetter] = useState<string>('');
  const [showHints, setShowHints] = useState(false);

  const handleLetterChange = (letter: string) => {
    setCurrentLetter(letter);
    setShowHints(true);
  };

  return (
    <TrainingProgressProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900 py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-300 mb-4">
              Training Mode
            </h1>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Practice your skills with helpful hints for each category. The timer is more
              relaxed, and you'll get suggestions to help you learn new words and
              improve your game.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center gap-8">
            <div className="lg:w-2/3">
              <GameBoard 
                isTrainingMode={true} 
                onLetterChange={handleLetterChange}
              />
            </div>
            
            {showHints && (
              <div className="lg:w-1/3">
                <HintPanel letter={currentLetter} />
              </div>
            )}
          </div>
        </div>
      </div>
    </TrainingProgressProvider>
  );
} 