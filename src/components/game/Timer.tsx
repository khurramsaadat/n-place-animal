'use client';

import { useEffect, useRef } from 'react';

interface TimerProps {
  timeRemaining: number;
  setTimeRemaining: (time: number) => void;
  onTimeUp: () => void;
  isTrainingMode?: boolean;
  isPaused?: boolean;
}

const Timer = ({ timeRemaining, setTimeRemaining, onTimeUp, isTrainingMode = false, isPaused = false }: TimerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const totalTime = isTrainingMode ? 60 : 50;
  const percentage = (timeRemaining / totalTime) * 100;
  const circumference = 2 * Math.PI * 36; // Circle radius is 36
  const strokeDashoffset = ((100 - percentage) / 100) * circumference; // Reversed for clockwise

  useEffect(() => {
    // Create audio element only once
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/clock-tick.mp3');
      audioRef.current.volume = 0.2; // Set a consistent volume for the last 10 seconds
    }

    if (timeRemaining <= 0) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      onTimeUp();
      return;
    }

    // Don't start countdown or play sounds if paused
    if (isPaused) {
      return;
    }

    // Only play tick sound in last 10 seconds
    if (timeRemaining <= 10) {
      const tickSound = audioRef.current.cloneNode() as HTMLAudioElement;
      tickSound.play().catch(err => console.log('Audio play failed:', err));
      
      // Clean up the cloned audio element after it plays
      tickSound.addEventListener('ended', () => {
        tickSound.remove();
      });
    }

    const timer = setInterval(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [timeRemaining, setTimeRemaining, onTimeUp, isTrainingMode, isPaused]);

  const getColor = () => {
    if (isTrainingMode) {
      if (percentage > 50) return 'text-blue-500';
      if (percentage > 25) return 'text-blue-400';
      return 'text-blue-300';
    } else {
      if (percentage > 60) return 'text-green-500';
      if (percentage > 30) return 'text-yellow-500';
      return 'text-red-500';
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative w-20 h-20">
        {/* Background circle */}
        <svg className="w-full h-full transform rotate-90">
          <circle
            cx="40"
            cy="40"
            r="36"
            strokeWidth="8"
            stroke="currentColor"
            fill="none"
            className="text-gray-200"
          />
          {/* Animated progress circle */}
          <circle
            cx="40"
            cy="40"
            r="36"
            strokeWidth="8"
            stroke="currentColor"
            fill="none"
            className={`${getColor()} transition-all duration-1000 ease-linear`}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 40 40)"
          />
        </svg>
        {/* Timer text in the middle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-lg font-bold ${getColor()}`}>
            {formatTime(timeRemaining)}
          </span>
        </div>
      </div>
      {isTrainingMode && (
        <span className="text-xs text-gray-500">Training Mode</span>
      )}
    </div>
  );
};

export default Timer; 