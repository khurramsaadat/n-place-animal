'use client';

import { useState } from 'react';
import GameBoard from '@/components/game/GameBoard';
import HintPanel from '@/components/training/HintPanel';
import ProgressTracker from '@/components/training/ProgressTracker';

export default function TrainingPage() {
  const [currentLetter, setCurrentLetter] = useState<string>('');
  const [showHints, setShowHints] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const handleLetterChange = (letter: string) => {
    setCurrentLetter(letter);
    setShowHints(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Training Mode
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Practice your skills with helpful hints for each category. The timer is more
            relaxed, and you'll get suggestions to help you learn new words and
            improve your game.
          </p>
          <button
            onClick={() => setShowProgress(!showProgress)}
            className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            {showProgress ? 'Hide Progress' : 'Show Progress'}
          </button>
        </div>

        {showProgress && (
          <div className="mb-8">
            <ProgressTracker onClose={() => setShowProgress(false)} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <GameBoard 
              isTrainingMode={true} 
              onLetterChange={handleLetterChange}
            />
          </div>
          
          {showHints && (
            <div className="lg:col-span-1">
              <HintPanel letter={currentLetter} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 