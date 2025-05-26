'use client';

import { useState } from 'react';

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-600 mb-8 text-center">
          Leaderboard
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
              <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Coming Soon!</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              We're working hard to bring you an exciting leaderboard feature where you can compete with players worldwide! 
              Track your progress, climb the ranks, and showcase your word-guessing skills.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-600 mb-2">🏆 Global Rankings</h3>
              <p className="text-gray-600">Compete with players from around the world</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-600 mb-2">📊 Daily & Weekly Challenges</h3>
              <p className="text-gray-600">New competitions every day and week</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-600 mb-2">🌟 Achievement System</h3>
              <p className="text-gray-600">Earn badges and unlock special rewards</p>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => window.history.back()}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Back to Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 