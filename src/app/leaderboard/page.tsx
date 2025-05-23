'use client';

import { useState } from 'react';

// This will be replaced with actual data from Supabase later
const DUMMY_SCORES = [
  { id: 1, player: 'Player 1', score: 35, date: '2024-03-19' },
  { id: 2, player: 'Player 2', score: 30, date: '2024-03-19' },
  { id: 3, player: 'Player 3', score: 25, date: '2024-03-19' },
];

export default function LeaderboardPage() {
  const [timeFrame, setTimeFrame] = useState<'all' | 'today' | 'week' | 'month'>('all');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-600 mb-8 text-center">
          Leaderboard
        </h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Time Frame Selector */}
          <div className="flex border-b border-gray-200">
            {['all', 'today', 'week', 'month'].map((period) => (
              <button
                key={period}
                onClick={() => setTimeFrame(period as typeof timeFrame)}
                className={`flex-1 px-4 py-3 text-sm font-medium ${
                  timeFrame === period
                    ? 'bg-purple-50 text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>

          {/* Leaderboard Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Player
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {DUMMY_SCORES.map((score, index) => (
                  <tr
                    key={score.id}
                    className="hover:bg-purple-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{score.player}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{score.score}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{score.date}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 