'use client';

import { useState, useEffect } from 'react';

interface ProgressStats {
  gamesPlayed: number;
  averageScore: number;
  bestScore: number;
  recentLetters: string[];
  categoryStrengths: {
    name: number;
    place: number;
    animal: number;
    thing: number;
  };
}

interface ProgressTrackerProps {
  onClose?: () => void;
}

const ProgressTracker = ({ onClose }: ProgressTrackerProps) => {
  const [stats, setStats] = useState<ProgressStats>({
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
  });

  useEffect(() => {
    // Load stats from localStorage
    const loadStats = () => {
      const savedStats = localStorage.getItem('trainingProgress');
      if (savedStats) {
        setStats(JSON.parse(savedStats));
      }
    };
    loadStats();
  }, []);

  const getCategoryStrengthLabel = (strength: number): string => {
    if (strength >= 80) return 'Expert';
    if (strength >= 60) return 'Advanced';
    if (strength >= 40) return 'Intermediate';
    if (strength >= 20) return 'Beginner';
    return 'Novice';
  };

  const getStrengthColor = (strength: number): string => {
    if (strength >= 80) return 'bg-green-500';
    if (strength >= 60) return 'bg-blue-500';
    if (strength >= 40) return 'bg-yellow-500';
    if (strength >= 20) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-600">Training Progress</h2>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Overall Stats */}
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Overall Progress</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Games Played: <span className="font-bold">{stats.gamesPlayed}</span></p>
              <p className="text-gray-600">Average Score: <span className="font-bold">{stats.averageScore.toFixed(1)}</span></p>
              <p className="text-gray-600">Best Score: <span className="font-bold">{stats.bestScore}</span></p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Recent Letters</h3>
            <div className="flex flex-wrap gap-2">
              {stats.recentLetters.map((letter, index) => (
                <span
                  key={index}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold"
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Category Strengths */}
        <div className="bg-purple-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-600 mb-4">Category Strengths</h3>
          <div className="space-y-4">
            {Object.entries(stats.categoryStrengths).map(([category, strength]) => (
              <div key={category}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 capitalize">{category}</span>
                  <span className="text-gray-500 text-sm">
                    {getCategoryStrengthLabel(strength)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${getStrengthColor(strength)} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${strength}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips based on strengths */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-purple-600 mb-2">Improvement Tips</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          {Object.entries(stats.categoryStrengths).map(([category, strength]) => {
            if (strength < 40) {
              return (
                <li key={category} className="flex items-start space-x-2">
                  <span className="text-red-500">•</span>
                  <span>
                    Practice more with <span className="font-medium capitalize">{category}</span> category.
                    Try using the hints feature in training mode.
                  </span>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProgressTracker; 