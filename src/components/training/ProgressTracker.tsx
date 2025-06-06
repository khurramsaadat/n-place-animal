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
  
  const { stats = {
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
  }, resetProgress } = progress;
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Ensure recentGames is always an array
  const recentGames = stats?.recentGames || [];
  const latestGame = stats?.latestGame;

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
                <th className="pb-2 text-sm font-medium text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {latestGame && (
                <tr className="text-gray-600 bg-white animate-fadeHighlight">
                  <td className="py-2 font-medium text-purple-600">{latestGame.letter}</td>
                  <td className="py-2">{latestGame.answers.name || '-'}</td>
                  <td className="py-2">{latestGame.answers.place || '-'}</td>
                  <td className="py-2">{latestGame.answers.animal || '-'}</td>
                  <td className="py-2">{latestGame.answers.thing || '-'}</td>
                  <td className="py-2 text-right font-medium text-purple-600">{latestGame.score}</td>
                </tr>
              )}
              {recentGames.slice(latestGame ? 1 : 0).map((game, index) => (
                <tr key={index} className="text-gray-500 bg-white">
                  <td className="py-2 font-medium">{game.letter}</td>
                  <td className="py-2">{game.answers.name || '-'}</td>
                  <td className="py-2">{game.answers.place || '-'}</td>
                  <td className="py-2">{game.answers.animal || '-'}</td>
                  <td className="py-2">{game.answers.thing || '-'}</td>
                  <td className="py-2 text-right">{game.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-2">
          {latestGame && (
            <div className="bg-white rounded p-2 animate-fadeHighlight">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-purple-600">{latestGame.letter}</span>
                <span className="text-sm font-medium text-purple-600">Total: {latestGame.score}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-500">Name:</span> {latestGame.answers.name || '-'}
                </div>
                <div>
                  <span className="text-gray-500">Place:</span> {latestGame.answers.place || '-'}
                </div>
                <div>
                  <span className="text-gray-500">Animal:</span> {latestGame.answers.animal || '-'}
                </div>
                <div>
                  <span className="text-gray-500">Thing:</span> {latestGame.answers.thing || '-'}
                </div>
              </div>
            </div>
          )}
          {recentGames.slice(latestGame ? 1 : 0).map((game, index) => (
            <div key={index} className="bg-white rounded p-2">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{game.letter}</span>
                <span className="text-sm text-gray-500">Total: {game.score}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                <div>Name: {game.answers.name || '-'}</div>
                <div>Place: {game.answers.place || '-'}</div>
                <div>Animal: {game.answers.animal || '-'}</div>
                <div>Thing: {game.answers.thing || '-'}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker; 