'use client';

import { useState, useRef, forwardRef, useImperativeHandle, ForwardRefRenderFunction } from 'react';
import LetterDisplay from './LetterDisplay';
import InputFields from './InputFields';
import Timer from './Timer';
import { useGameProgress, useTrainingProgressContext } from '@/hooks/useTrainingProgress';
import { GameResult } from '@/lib/types';

export interface GameBoardProps {
  isTrainingMode?: boolean;
  onLetterChange?: (letter: string) => void;
}

export interface GameBoardRef {
  resetGame: () => void;
}

type GameState = 'active' | 'finished' | 'waiting' | 'no-letters';

const GameBoardComponent: ForwardRefRenderFunction<GameBoardRef, GameBoardProps> = (
  { isTrainingMode = false, onLetterChange }, 
  ref
) => {
  const gameProgress = useGameProgress();
  const trainingProgress = useTrainingProgressContext();
  const progress = isTrainingMode ? trainingProgress : gameProgress;
  
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
  
  const usedLettersRef = useRef<Set<string>>(new Set());
  const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const generateRandomLetter = (): string => {
    const availableLetters = allLetters.filter(letter => !usedLettersRef.current.has(letter));
    
    if (availableLetters.length === 0) {
      return '';
    }
    
    const randomIndex = Math.floor(Math.random() * availableLetters.length);
    const newLetter = availableLetters[randomIndex];
    usedLettersRef.current.add(newLetter);
    
    return newLetter;
  };

  const calculateBaseScore = (answers: Record<string, string>): number => {
    const validAnswers = Object.values(answers)
      .map(answer => answer.toLowerCase().trim())
      .filter(answer => answer !== '');
    
    return validAnswers.length * 10;
  };

  const handleGameEnd = () => {
    if (!currentLetter) return;
    
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
    
    if (!newLetter) {
      setGameState('no-letters');
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
    usedLettersRef.current = new Set();
  };

  useImperativeHandle(ref, () => ({
    resetGame
  }));

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 space-y-4 sm:space-y-6">
      <div className="flex justify-between items-center -mt-2">
        <div className="text-xs sm:text-sm text-gray-600">
          Letters remaining: {26 - usedLettersRef.current.size}
        </div>
        {(gameState === 'waiting' || gameState === 'finished' || gameState === 'no-letters') && (
          <>
            {gameState === 'no-letters' ? (
              <button
                onClick={resetGame}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Start New Round
              </button>
            ) : (
              <button
                onClick={startNewGame}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {gameState === 'finished' ? 'Play Again' : `Start ${isTrainingMode ? 'Practice' : 'Game'}`}
              </button>
            )}
          </>
        )}
      </div>

      <div className="space-y-4 sm:space-y-6">
        {gameState !== 'waiting' && gameState !== 'no-letters' && (
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
        
        <div className={`transition-opacity duration-300 ${gameState === 'waiting' || gameState === 'no-letters' ? 'opacity-50' : 'opacity-100'}`}>
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
GameBoard.displayName = 'GameBoard';

export default GameBoard; 