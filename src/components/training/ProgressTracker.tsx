'use client';

import { useState, useEffect } from 'react';
import { useTrainingProgress } from '@/hooks/useTrainingProgress';

interface ProgressTrackerProps {
  onClose?: () => void;
}

const ProgressTracker = ({ onClose }: ProgressTrackerProps) => {
  const { stats, resetProgress } = useTrainingProgress();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleReset = () => {
    resetProgress();
    setShowResetConfirm(false);
  };

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
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-600">Training Progress</h2>
        <div className="flex items-center space-x-4">
          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="text-red-500 hover:text-red-600 text-sm font-medium flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Reset Progress
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={handleReset}
                className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm font-medium"
              >
                Confirm Reset
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="text-gray-500 hover:text-gray-600 px-3 py-1 rounded text-sm font-medium"
              >
                Cancel
              </button>
            </div>
          )}
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

          <div className="bg-purple-50 rounded-lg p-4 h-full">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Recent Games</h3>
            <div className="overflow-x-auto">
              <div className="max-h-[300px] overflow-y-auto">
                <table className="w-full">
                  <thead className="sticky top-0 bg-purple-50 z-10">
                    <tr className="text-left text-gray-600 border-b border-gray-200">
                      <th className="pb-2 font-medium">Letter</th>
                      <th className="pb-2 font-medium">Name</th>
                      <th className="pb-2 font-medium">Place</th>
                      <th className="pb-2 font-medium">Animal</th>
                      <th className="pb-2 font-medium">Thing</th>
                      <th className="pb-2 font-medium text-right">Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {stats.latestGame && (
                      <tr className="text-gray-600 bg-white">
                        <td className="py-2 font-medium text-purple-600">
                          {stats.latestGame.letter}
                        </td>
                        <td className="py-2">{stats.latestGame.answers.name || '-'}</td>
                        <td className="py-2">{stats.latestGame.answers.place || '-'}</td>
                        <td className="py-2">{stats.latestGame.answers.animal || '-'}</td>
                        <td className="py-2">{stats.latestGame.answers.thing || '-'}</td>
                        <td className="py-2 text-right font-medium text-purple-600">
                          {stats.latestGame.score}
                        </td>
                      </tr>
                    )}
                    {stats.recentLetters.slice(stats.latestGame ? 1 : 0).map((letter, index) => (
                      <tr key={index} className="text-gray-500 bg-white hover:bg-purple-50 transition-colors">
                        <td className="py-2 font-medium">{letter}</td>
                        <td className="py-2">-</td>
                        <td className="py-2">-</td>
                        <td className="py-2">-</td>
                        <td className="py-2">-</td>
                        <td className="py-2 text-right">-</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Category Strengths */}
        <div className="bg-purple-50 rounded-lg p-4 h-full">
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
        <div className="text-sm text-gray-600">
          {Object.entries(stats.categoryStrengths)
            .filter(([_, strength]) => strength < 40)
            .length > 0 ? (
            <div className="space-y-1">
              <p>Try using hints in training mode for:</p>
              <p className="font-medium">
                Name <span className="mx-2">-</span> 
                Place <span className="mx-2">-</span> 
                Animal <span className="mx-2">-</span> 
                Thing
              </p>
            </div>
          ) : (
            <p className="text-green-600">Great job! All categories are progressing well.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker; 