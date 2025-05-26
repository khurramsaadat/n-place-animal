'use client';

import { useState } from 'react';
import { useGameProgress, useTrainingProgressContext } from '@/hooks/useTrainingProgress';

interface ProgressTrackerProps {
  onClose?: () => void;
  isTrainingMode?: boolean;
}

const ProgressTracker = ({ onClose, isTrainingMode = false }: ProgressTrackerProps) => {
  const gameProgress = useGameProgress();
  let progress;
  
  try {
    const trainingProgress = useTrainingProgressContext();
    progress = isTrainingMode ? trainingProgress : gameProgress;
  } catch {
    progress = gameProgress;
  }
  
  const { stats, resetProgress } = progress;
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleReset = () => {
    resetProgress();
    setShowResetConfirm(false);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4 progress-tracker">
      <div className="flex justify-between items-center mb-4 progress-tracker-header">
        <h2 className="text-xl font-bold text-purple-600">Your Progress</h2>
        <div className="flex items-center space-x-2">
          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="text-red-500 hover:text-red-600 text-sm font-medium flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Reset
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={handleReset}
                className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-sm font-medium"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="text-gray-500 hover:text-gray-600 px-2 py-1 rounded text-sm font-medium"
              >
                Cancel
              </button>
            </div>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 ml-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Compact Stats */}
      <div className="bg-purple-50 rounded-lg p-3 mb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="bg-white rounded p-2 shadow-sm">
            <div className="text-xs text-gray-500">Games Played</div>
            <div className="text-lg font-bold text-purple-600">{stats.gamesPlayed}</div>
          </div>
          <div className="bg-white rounded p-2 shadow-sm">
            <div className="text-xs text-gray-500">Average Score</div>
            <div className="text-lg font-bold text-purple-600">{stats.averageScore.toFixed(1)}</div>
          </div>
          <div className="bg-white rounded p-2 shadow-sm">
            <div className="text-xs text-gray-500">Best Score</div>
            <div className="text-lg font-bold text-purple-600">{stats.bestScore}</div>
          </div>
          <div className="bg-white rounded p-2 shadow-sm">
            <div className="text-xs text-gray-500">Total Games</div>
            <div className="text-lg font-bold text-purple-600">{stats.gamesPlayed}</div>
          </div>
        </div>
      </div>

      {/* Recent Games */}
      <div className="bg-purple-50 rounded-lg p-3">
        <h3 className="text-sm font-semibold text-purple-600 mb-3">Recent Games</h3>
        
        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="text-left text-gray-600 border-b border-gray-200">
              <tr>
                <th className="pb-2 text-sm font-medium">Letter</th>
                <th className="pb-2 text-sm font-medium">Name</th>
                <th className="pb-2 text-sm font-medium">Place</th>
                <th className="pb-2 text-sm font-medium">Animal</th>
                <th className="pb-2 text-sm font-medium">Thing</th>
                <th className="pb-2 text-sm font-medium text-right">Time</th>
                <th className="pb-2 text-sm font-medium text-right">Speed</th>
                <th className="pb-2 text-sm font-medium text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {stats.latestGame && (
                <tr className="text-gray-600 bg-white animate-fadeHighlight">
                  <td className="py-2 font-medium text-purple-600">{stats.latestGame.letter}</td>
                  <td className="py-2">{stats.latestGame.answers.name || '-'}</td>
                  <td className="py-2">{stats.latestGame.answers.place || '-'}</td>
                  <td className="py-2">{stats.latestGame.answers.animal || '-'}</td>
                  <td className="py-2">{stats.latestGame.answers.thing || '-'}</td>
                  <td className="py-2 text-right">9s</td>
                  <td className="py-2 text-right text-green-600">+82</td>
                  <td className="py-2 text-right font-medium text-purple-600">82</td>
                </tr>
              )}
              {stats.recentLetters.slice(stats.latestGame ? 1 : 0).map((letter, index) => (
                <tr key={index} className="text-gray-500 bg-white">
                  <td className="py-2 font-medium">{letter}</td>
                  <td className="py-2">-</td>
                  <td className="py-2">-</td>
                  <td className="py-2">-</td>
                  <td className="py-2">-</td>
                  <td className="py-2 text-right">-</td>
                  <td className="py-2 text-right">-</td>
                  <td className="py-2 text-right">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-2">
          {stats.latestGame && (
            <div className="bg-white rounded p-2 animate-fadeHighlight">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-purple-600">{stats.latestGame.letter}</span>
                <span className="text-sm font-medium text-purple-600">Total: {stats.latestGame.score}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-500">Name:</span> {stats.latestGame.answers.name || '-'}
                </div>
                <div>
                  <span className="text-gray-500">Place:</span> {stats.latestGame.answers.place || '-'}
                </div>
                <div>
                  <span className="text-gray-500">Animal:</span> {stats.latestGame.answers.animal || '-'}
                </div>
                <div>
                  <span className="text-gray-500">Thing:</span> {stats.latestGame.answers.thing || '-'}
                </div>
                <div>
                  <span className="text-gray-500">Time:</span> 9s
                </div>
                <div>
                  <span className="text-gray-500">Speed:</span> <span className="text-green-600">+82</span>
                </div>
              </div>
            </div>
          )}
          {stats.recentLetters.slice(stats.latestGame ? 1 : 0).map((letter, index) => (
            <div key={index} className="bg-white rounded p-2">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{letter}</span>
                <span className="text-sm text-gray-500">-</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                <div>Name: -</div>
                <div>Place: -</div>
                <div>Animal: -</div>
                <div>Thing: -</div>
                <div>Time: -</div>
                <div>Speed: -</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker; 