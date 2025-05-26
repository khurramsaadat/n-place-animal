'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import BackgroundMusic from '@/components/ui/BackgroundMusic';
import { useRef } from 'react';
import { GameProgressProvider } from '@/hooks/useTrainingProgress';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleLogoClick = () => {
    // Navigate to home page
    window.location.href = '/';
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <GameProgressProvider>
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50">
            <Header onLogoClick={handleLogoClick} />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <BackgroundMusic />
          </div>
        </GameProgressProvider>
      </body>
    </html>
  );
}
