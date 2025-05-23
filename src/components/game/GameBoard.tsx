'use client';

import { useState, useEffect } from 'react';
import LetterDisplay from './LetterDisplay';
import InputFields from './InputFields';
import Timer from './Timer';
import GameResults from './GameResults';
import { calculateScore } from '@/lib/utils';
import { useTrainingProgress } from '@/hooks/useTrainingProgress';

interface GameBoardProps {
  isTrainingMode?: boolean;
  onLetterChange?: (letter: string) => void;
}

const GameBoard = ({ isTrainingMode = false, onLetterChange }: GameBoardProps) => {
  const [currentLetter, setCurrentLetter] = useState<string>('');
  const [isGameActive, setIsGameActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(isTrainingMode ? 120 : 60);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({
    name: '',
    place: '',
    animal: '',
    thing: '',
  });
  const [score, setScore] = useState(0);

  const { updateProgress } = useTrainingProgress();

  const generateRandomLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters.charAt(Math.floor(Math.random() * letters.length));
  };

  const startNewGame = () => {
    const newLetter = generateRandomLetter();
    setCurrentLetter(newLetter);
    setIsGameActive(true);
    setTimeRemaining(isTrainingMode ? 120 : 60);
    setShowResults(false);
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

  const handleTimeUp = () => {
    setIsGameActive(false);
    const finalScore = calculateScore(
      Object.values(answers),
      [] // This will be replaced with other players' answers when multiplayer is implemented
    );
    setScore(finalScore);
    setShowResults(true);

    // Update training progress if in training mode
    if (isTrainingMode) {
      updateProgress({
        letter: currentLetter,
        score: finalScore,
        answers,
      });
    }
  };

  const handleAnswerChange = (field: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          {isTrainingMode ? 'Training Mode' : 'Name Place Animal Thing'}
        </h1>
        {!isGameActive && !showResults && (
          <button
            onClick={startNewGame}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-bold hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg mb-8"
          >
            Start {isTrainingMode ? 'Practice' : 'Game'}
          </button>
        )}
      </div>

      {(isGameActive || !showResults) && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            {isGameActive ? (
              <Timer
                timeRemaining={timeRemaining}
                setTimeRemaining={setTimeRemaining}
                onTimeUp={handleTimeUp}
                isTrainingMode={isTrainingMode}
              />
            ) : (
              <div className="w-24" /> /* Placeholder for timer */
            )}
            <LetterDisplay letter={currentLetter || '?'} />
          </div>
          <InputFields
            currentLetter={currentLetter || '?'}
            answers={answers}
            onAnswerChange={handleAnswerChange}
            isDisabled={!isGameActive}
          />
        </div>
      )}

      {showResults && (
        <GameResults
          answers={answers}
          letter={currentLetter}
          score={score}
          onPlayAgain={startNewGame}
        />
      )}
    </div>
  );
};

export default GameBoard; 