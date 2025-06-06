import React, { useState, useEffect, createContext, useContext } from 'react';
import { GameResult } from '@/lib/types';

export interface CategoryStrengths {
  name: number;
  place: number;
  animal: number;
  thing: number;
}

export interface TrainingStats {
  gamesPlayed: number;
  averageScore: number;
  bestScore: number;
  recentGames: GameResult[];
  categoryStrengths: CategoryStrengths;
  latestGame?: GameResult;
}

interface ProgressContextType {
  stats: TrainingStats;
  updateProgress: (result: GameResult) => void;
  resetProgress: () => void;
}

const INITIAL_STATS: TrainingStats = {
  gamesPlayed: 0,
  averageScore: 0,
  bestScore: 0,
  recentGames: [],
  categoryStrengths: {
    name: 0,
    place: 0,
    animal: 0,
    thing: 0,
  },
  latestGame: undefined
};

// Create contexts for both training and game progress
export const GameProgressContext = createContext<ProgressContextType | undefined>(undefined);
export const TrainingProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function useTrainingProgress(isTrainingMode: boolean = false) {
  const [stats, setStats] = useState<TrainingStats>(INITIAL_STATS);
  const storageKey = isTrainingMode ? 'trainingProgress' : 'gameProgress';

  useEffect(() => {
    // Load stats from localStorage on mount
    const savedStats = localStorage.getItem(storageKey);
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, [storageKey]);

  const updateProgress = (result: GameResult) => {
    setStats((prevStats) => {
      // Calculate new stats
      const newGamesPlayed = prevStats.gamesPlayed + 1;
      const newTotalScore = prevStats.averageScore * prevStats.gamesPlayed + result.score;
      const newAverageScore = newTotalScore / newGamesPlayed;
      const newBestScore = Math.max(prevStats.bestScore, result.score);

      // Update recent games (keep last 5)
      const newRecentGames = [result, ...(prevStats.recentGames || [])].slice(0, 5);

      // Update category strengths
      const newStrengths = { ...(prevStats.categoryStrengths || {
        name: 0,
        place: 0,
        animal: 0,
        thing: 0,
      })};
      
      Object.entries(result.answers).forEach(([category, answer]) => {
        if (answer) {
          // Increase strength if answer was provided
          newStrengths[category as keyof CategoryStrengths] = Math.min(
            100,
            (newStrengths[category as keyof CategoryStrengths] || 0) + 5
          );
        } else {
          // Decrease strength if no answer was provided
          newStrengths[category as keyof CategoryStrengths] = Math.max(
            0,
            (newStrengths[category as keyof CategoryStrengths] || 0) - 2
          );
        }
      });

      const newStats = {
        gamesPlayed: newGamesPlayed,
        averageScore: newAverageScore,
        bestScore: newBestScore,
        recentGames: newRecentGames,
        categoryStrengths: newStrengths,
        latestGame: result
      };

      // Save to localStorage
      localStorage.setItem(storageKey, JSON.stringify(newStats));

      return newStats;
    });
  };

  const resetProgress = () => {
    setStats(INITIAL_STATS);
    localStorage.removeItem(storageKey);
  };

  return {
    stats,
    updateProgress,
    resetProgress,
  };
}

// Custom hooks to use the contexts
export function useGameProgress() {
  const context = useContext(GameProgressContext);
  if (context === undefined) {
    throw new Error('useGameProgress must be used within a GameProgressProvider');
  }
  return context;
}

export function useTrainingProgressContext() {
  const context = useContext(TrainingProgressContext);
  if (context === undefined) {
    throw new Error('useTrainingProgressContext must be used within a TrainingProgressProvider');
  }
  return context;
}

// Provider components
export function GameProgressProvider({ children }: { children: React.ReactNode }) {
  const progress = useTrainingProgress(false);
  return React.createElement(GameProgressContext.Provider, { value: progress }, children);
}

export function TrainingProgressProvider({ children }: { children: React.ReactNode }) {
  const progress = useTrainingProgress(true);
  return React.createElement(TrainingProgressContext.Provider, { value: progress }, children);
} 