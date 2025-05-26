'use client';

import { useState, useRef, forwardRef, useImperativeHandle, ForwardRefRenderFunction } from 'react';
import LetterDisplay from './LetterDisplay';
import InputFields from './InputFields';
import Timer from './Timer';
import { useGameProgress, useTrainingProgressContext } from '@/hooks/useTrainingProgress';
import { GameResult } from '@/lib/types';

interface GameBoardProps {
  isTrainingMode?: boolean;
  onLetterChange?: (letter: string) => void;
}

export interface GameBoardRef {
  resetGame: () => void;
}

type GameState = 'active' | 'finished' | 'waiting';

const GameBoardComponent: ForwardRefRenderFunction<GameBoardRef, GameBoardProps> = (
  { isTrainingMode = false, onLetterChange }, 
  ref
) => {
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
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [gameState, setGameState] = useState<GameState>('waiting');
  const [startTime] = useState(Date.now());
  const [answers, setAnswers] = useState({
    name: '',
    place: '',
    animal: '',
    thing: '',
  });
  
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

  const calculateBaseScore = (answers: Record<string, string>): number => {
    // Convert all answers to lowercase for comparison and trim whitespace
    const validAnswers = Object.values(answers)
      .map(answer => answer.toLowerCase().trim())
      .filter(answer => answer !== ''); // Filter out empty answers
    
    // Each valid answer is worth 10 points
    return validAnswers.length * 10;
  };

  const handleGameEnd = () => {
    if (!currentLetter) return;
    
    // Stop the timer
    setIsTimerPaused(true);
    setIsGameActive(false);
    
    const timeUsed = Math.round((Date.now() - startTime) / 1000);
    const score = calculateBaseScore(answers);

    const result: GameResult = {
      letter: currentLetter,
      score: score,
      timeUsed,
      answers: { ...answers }
    };

    updateProgress(result);
    setGameState('finished');
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
    setIsTimerPaused(false);
    setGameState('active');
    setAnswers({
      name: '',
      place: '',
      animal: '',
      thing: '',
    });
    if (onLetterChange) {
      onLetterChange(newLetter);
    }
  };

  const handleAnnouncementComplete = () => {
    setIsTimerPaused(false);
  };

  const handleAnswerChange = (field: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetGame = () => {
    setCurrentLetter('');
    setIsGameActive(false);
    setTimeRemaining(isTrainingMode ? 60 : 50);
    setIsTimerPaused(false);
    setGameState('waiting');
    setAnswers({
      name: '',
      place: '',
      animal: '',
      thing: '',
    });
  };

  useImperativeHandle(ref, () => ({
    resetGame
  }));

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-4 space-y-4 sm:space-y-6">
      <div className="text-center">
        {(gameState === 'waiting' || gameState === 'finished') && (
          <>
            <button
              onClick={startNewGame}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg mb-4 sm:mb-6"
            >
              {gameState === 'finished' ? 'Play Again' : `Start ${isTrainingMode ? 'Practice' : 'Game'}`}
            </button>
            {/* Add counter for remaining letters */}
            <div className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
              Letters remaining: {26 - usedLettersRef.current.size}
            </div>
          </>
        )}
      </div>

      <div className="space-y-4 sm:space-y-6">
        {gameState !== 'waiting' && (
          <div className="flex justify-between items-center bg-white/50 backdrop-blur-sm rounded-lg p-2 sm:p-4 shadow-sm">
            <Timer
              timeRemaining={timeRemaining}
              setTimeRemaining={setTimeRemaining}
              onTimeUp={handleGameEnd}
              isTrainingMode={isTrainingMode}
              isPaused={isTimerPaused || gameState === 'finished'}
            />
            <LetterDisplay 
              letter={currentLetter || '?'} 
              isGameActive={isGameActive}
              onAnnouncementComplete={handleAnnouncementComplete}
            />
          </div>
        )}
        
        {/* Always show input fields */}
        <div className={`transition-opacity duration-300 ${gameState === 'waiting' ? 'opacity-50' : 'opacity-100'}`}>
          <InputFields
            currentLetter={currentLetter || '?'}
            answers={answers}
            onAnswerChange={handleAnswerChange}
            isDisabled={gameState !== 'active'}
          />
        </div>

        {gameState === 'active' && (
          <div className="flex space-x-4">
            <button
              onClick={handleGameEnd}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 sm:px-6 py-2 rounded-full font-medium text-sm hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

GameBoardComponent.displayName = 'GameBoard';

const GameBoard = forwardRef<GameBoardRef, GameBoardProps>(GameBoardComponent);
export default GameBoard; 