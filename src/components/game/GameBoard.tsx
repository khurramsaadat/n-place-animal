'use client';

import { useState, useEffect, useRef } from 'react';
import LetterDisplay from './LetterDisplay';
import InputFields from './InputFields';
import Timer from './Timer';
import GameResults from './GameResults';
import { calculateScore } from '@/lib/utils';
import { useGameProgress, useTrainingProgressContext } from '@/hooks/useTrainingProgress';

interface GameBoardProps {
  isTrainingMode?: boolean;
  onLetterChange?: (letter: string) => void;
}

const GameBoard = ({ isTrainingMode = false, onLetterChange }: GameBoardProps) => {
  const gameProgress = useGameProgress();
  let progress;
  
  try {
    const trainingProgress = useTrainingProgressContext();
    progress = isTrainingMode ? trainingProgress : gameProgress;
  } catch {
    progress = gameProgress;
  }
  
  const { updateProgress } = progress;
  
  const [currentLetter, setCurrentLetter] = useState<string>('');
  const [isGameActive, setIsGameActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(isTrainingMode ? 60 : 50);
  const [isTimerPaused, setIsTimerPaused] = useState(true);
  const [answers, setAnswers] = useState({
    name: '',
    place: '',
    animal: '',
    thing: '',
  });
  const [score, setScore] = useState(0);
  
  // Add a ref to store used letters that persists between renders
  const usedLettersRef = useRef<Set<string>>(new Set());
  const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const generateRandomLetter = (): string => {
    // Filter out used letters
    const availableLetters = allLetters.filter(letter => !usedLettersRef.current.has(letter));
    
    // If all letters have been used, return empty string
    if (availableLetters.length === 0) {
      return '';
    }
    
    // Generate random letter from available letters
    const randomIndex = Math.floor(Math.random() * availableLetters.length);
    const newLetter = availableLetters[randomIndex];
    
    // Add to used letters
    usedLettersRef.current.add(newLetter);
    
    return newLetter;
  };

  const startNewGame = () => {
    const newLetter = generateRandomLetter();
    
    // If no letters available, show message and reset
    if (!newLetter) {
      alert('All letters have been used! Refresh the page to start over.');
      return;
    }
    
    setCurrentLetter(newLetter);
    setIsGameActive(true);
    setTimeRemaining(isTrainingMode ? 60 : 50);
    setIsTimerPaused(true);
    setAnswers({
      name: '',
      place: '',
      animal: '',
      thing: '',
    });
    setScore(0);
    if (onLetterChange) {
      onLetterChange(newLetter);
    }
  };

  const handleAnnouncementComplete = () => {
    setIsTimerPaused(false);
  };

  const handleDone = () => {
    setIsGameActive(false);
    const timeUsed = isTrainingMode ? 60 - timeRemaining : 50 - timeRemaining;
    const baseScore = calculateScore(
      Object.values(answers),
      [] // This will be replaced with other players' answers when multiplayer is implemented
    );
    const speedBonus = Math.max(0, Math.floor((timeRemaining / (isTrainingMode ? 60 : 50)) * baseScore));
    const finalScore = baseScore + speedBonus;
    
    updateProgress({
      letter: currentLetter,
      score: finalScore,
      answers: answers,
      timeUsed,
      speedBonus,
      baseScore
    });
  };

  const handleAnswerChange = (field: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="text-center">
        {!isGameActive && (
          <>
            <button
              onClick={startNewGame}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg mb-6"
            >
              {isGameActive ? 'Play Again' : `Start ${isTrainingMode ? 'Practice' : 'Game'}`}
            </button>
            {/* Add counter for remaining letters */}
            <div className="text-sm text-gray-600 mt-2">
              Letters remaining: {26 - usedLettersRef.current.size}
            </div>
          </>
        )}
      </div>

      {isGameActive && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <Timer
              timeRemaining={timeRemaining}
              setTimeRemaining={setTimeRemaining}
              onTimeUp={handleDone}
              isTrainingMode={isTrainingMode}
              isPaused={isTimerPaused}
            />
            <LetterDisplay 
              letter={currentLetter || '?'} 
              isGameActive={isGameActive}
              onAnnouncementComplete={handleAnnouncementComplete}
            />
          </div>
          <InputFields
            currentLetter={currentLetter || '?'}
            answers={answers}
            onAnswerChange={handleAnswerChange}
            isDisabled={!isGameActive}
          />
          <div className="flex space-x-4">
            <button
              onClick={handleDone}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full font-medium text-sm hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Done
            </button>
            <button
              onClick={startNewGame}
              className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium text-sm hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBoard; 