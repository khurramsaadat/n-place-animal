'use client';

import dynamic from 'next/dynamic';
import ProgressTracker from '@/components/training/ProgressTracker';

// Dynamically import GameBoard with no SSR
const GameBoard = dynamic(() => import('@/components/game/GameBoard'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="w-full">
          <GameBoard />
        </div>
        
        <div className="w-full">
          <h2 className="text-2xl font-bold text-purple-600 mb-4 text-center">Your Progress</h2>
          <ProgressTracker />
        </div>
      </div>
    </div>
  );
}
