'use client';

import dynamic from 'next/dynamic';

// Dynamically import GameBoard with no SSR
const GameBoard = dynamic(() => import('@/components/game/GameBoard'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 py-12">
      <GameBoard />
    </div>
  );
}
