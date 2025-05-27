'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import BackgroundMusic from '@/components/ui/BackgroundMusic';
import DarkModeToggle from '@/components/ui/DarkModeToggle';
import { useRef } from 'react';
import { GameProgressProvider, TrainingProgressProvider } from '@/hooks/useTrainingProgress';

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <GameProgressProvider>
          <TrainingProgressProvider>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
              <Header onLogoClick={handleLogoClick} />
              <div className="container mx-auto px-4 mt-2">
                <div className="flex justify-end">
                  <DarkModeToggle />
                </div>
              </div>
              <main className="flex-grow -mt-2">
                {children}
              </main>
              <Footer />
              <BackgroundMusic />
            </div>
          </TrainingProgressProvider>
        </GameProgressProvider>
      </body>
    </html>
  );
}
