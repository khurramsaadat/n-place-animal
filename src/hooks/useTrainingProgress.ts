import { useState, useEffect } from 'react';

interface CategoryStrengths {
  name: number;
  place: number;
  animal: number;
  thing: number;
}

interface TrainingStats {
  gamesPlayed: number;
  averageScore: number;
  bestScore: number;
  recentLetters: string[];
  categoryStrengths: CategoryStrengths;
}

interface GameResult {
  letter: string;
  score: number;
  answers: {
    name: string;
    place: string;
    animal: string;
    thing: string;
  };
}

const INITIAL_STATS: TrainingStats = {
  gamesPlayed: 0,
  averageScore: 0,
  bestScore: 0,
  recentLetters: [],
  categoryStrengths: {
    name: 0,
    place: 0,
    animal: 0,
    thing: 0,
  },
};

export function useTrainingProgress() {
  const [stats, setStats] = useState<TrainingStats>(INITIAL_STATS);

  useEffect(() => {
    // Load stats from localStorage on mount
    const savedStats = localStorage.getItem('trainingProgress');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  const updateProgress = (result: GameResult) => {
    setStats((prevStats) => {
      // Calculate new stats
      const newGamesPlayed = prevStats.gamesPlayed + 1;
      const newTotalScore = prevStats.averageScore * prevStats.gamesPlayed + result.score;
      const newAverageScore = newTotalScore / newGamesPlayed;
      const newBestScore = Math.max(prevStats.bestScore, result.score);

      // Update recent letters (keep last 5)
      const newRecentLetters = [result.letter, ...prevStats.recentLetters].slice(0, 5);

      // Update category strengths
      const newStrengths = { ...prevStats.categoryStrengths };
      Object.entries(result.answers).forEach(([category, answer]) => {
        if (answer) {
          // Increase strength if answer was provided
          newStrengths[category as keyof CategoryStrengths] = Math.min(
            100,
            newStrengths[category as keyof CategoryStrengths] + 5
          );
        } else {
          // Decrease strength if no answer was provided
          newStrengths[category as keyof CategoryStrengths] = Math.max(
            0,
            newStrengths[category as keyof CategoryStrengths] - 2
          );
        }
      });

      const newStats = {
        gamesPlayed: newGamesPlayed,
        averageScore: newAverageScore,
        bestScore: newBestScore,
        recentLetters: newRecentLetters,
        categoryStrengths: newStrengths,
      };

      // Save to localStorage
      localStorage.setItem('trainingProgress', JSON.stringify(newStats));

      return newStats;
    });
  };

  const resetProgress = () => {
    setStats(INITIAL_STATS);
    localStorage.removeItem('trainingProgress');
  };

  return {
    stats,
    updateProgress,
    resetProgress,
  };
} 