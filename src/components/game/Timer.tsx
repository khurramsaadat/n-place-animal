'use client';

import { useEffect } from 'react';

interface TimerProps {
  timeRemaining: number;
  setTimeRemaining: (time: number) => void;
  onTimeUp: () => void;
  isTrainingMode?: boolean;
}

const Timer = ({ timeRemaining, setTimeRemaining, onTimeUp, isTrainingMode = false }: TimerProps) => {
  useEffect(() => {
    if (timeRemaining <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, setTimeRemaining, onTimeUp]);

  const totalTime = isTrainingMode ? 120 : 60;
  const percentage = (timeRemaining / totalTime) * 100;
  
  const getColor = () => {
    if (isTrainingMode) {
      if (percentage > 50) return 'text-blue-500';
      if (percentage > 25) return 'text-blue-400';
      return 'text-blue-300';
    } else {
      if (percentage > 66) return 'text-green-500';
      if (percentage > 33) return 'text-yellow-500';
      return 'text-red-500';
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center space-x-2">
      <svg className="w-8 h-8" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          className={getColor()}
          d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.24,7.76L14.83,6.34L11,10.17V7H9V14H16V12H12.83L16.24,7.76Z"
        />
      </svg>
      <div className="flex flex-col">
        <span className={`text-2xl font-bold ${getColor()}`}>
          {formatTime(timeRemaining)}
        </span>
        {isTrainingMode && (
          <span className="text-xs text-gray-500">Training Mode</span>
        )}
      </div>
    </div>
  );
};

export default Timer; 