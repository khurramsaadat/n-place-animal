'use client';

import { useState } from 'react';
import GameBoard from '@/components/game/GameBoard';
import HintPanel from '@/components/training/HintPanel';
import ProgressTracker from '@/components/training/ProgressTracker';

export default function TrainingPage() {
  const [currentLetter, setCurrentLetter] = useState<string>('');
  const [showHints, setShowHints] = useState(false);

  const handleLetterChange = (letter: string) => {
    setCurrentLetter(letter);
    setShowHints(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Training Mode
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
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

        <div className="w-full">
          <h2 className="text-2xl font-bold text-purple-600 mb-4 text-center">Training Progress</h2>
          <ProgressTracker />
        </div>
      </div>
    </div>
  );
} 