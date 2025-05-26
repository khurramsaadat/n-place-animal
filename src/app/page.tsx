'use client';

import { useRef, Suspense } from 'react';
import dynamic from 'next/dynamic';
import ProgressTracker from '@/components/training/ProgressTracker';
import type { GameBoardRef } from '@/components/game/GameBoard';

// Dynamically import GameBoard with no SSR and preserve ref
const GameBoard = dynamic(
  () => import('@/components/game/GameBoard'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="animate-pulse text-purple-600">Loading game...</div>
      </div>
    )
  }
);

export default function Home() {
  const gameBoardRef = useRef<GameBoardRef>(null);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="w-full">
          <Suspense fallback={
            <div className="w-full h-64 flex items-center justify-center">
              <div className="animate-pulse text-purple-600">Loading game...</div>
            </div>
          }>
            <GameBoard 
              ref={gameBoardRef}
              isTrainingMode={false} 
            />
          </Suspense>
        </div>
        
        <div className="w-full">
          <ProgressTracker isTrainingMode={false} />
        </div>
      </div>
    </div>
  );
}
