'use client';

import { useRef, Suspense, forwardRef } from 'react';
import dynamic from 'next/dynamic';
import ProgressTracker from '@/components/training/ProgressTracker';
import type { GameBoardRef, GameBoardProps } from '@/components/game/GameBoard';

// Move dynamic import outside to prevent recreation on each render
const GameBoard = dynamic(
  () => import('@/components/game/GameBoard').then(mod => mod.default),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="animate-pulse text-purple-600">Loading game...</div>
      </div>
    )
  }
);

// Create a wrapper component that handles the ref forwarding
const DynamicGameBoard = forwardRef<GameBoardRef, GameBoardProps>((props, ref) => {
  return <GameBoard {...props} ref={ref} />;
});

DynamicGameBoard.displayName = 'DynamicGameBoard';

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
            <DynamicGameBoard 
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
