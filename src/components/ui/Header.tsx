'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onLogoClick: () => void;
}

const Header = ({ onLogoClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { 
      href: '/', 
      label: 'Game',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 4C5.91 4 3 6.91 3 10.5c0 2.49 1.04 3.13 1.97 4.25C6 15.93 6 16.84 6 18.15V19c0 .55.45 1 1 1h2.17c.55 0 1-.45 1-1v-1.5c0-1.31 0-2.22 1.03-3.4.93-1.12 1.97-1.76 1.97-4.25C13.17 6.91 10.26 4 6.67 4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8c3.31 0 6 2.69 6 6 0 2.72-1.83 5.02-4.31 5.75C16.46 19.82 16.25 20 16 20h-2c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h2l.12-.06C17.87 16.54 19 15.36 19 14c0-2.21-1.79-4-4-4" />
        </svg>
      )
    },
    { 
      href: '/rules', 
      label: 'Rules',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    { 
      href: '/leaderboard', 
      label: 'Leaderboard',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      href: '/training', 
      label: 'Training',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      href: '/word-bank', 
      label: 'Word Bank',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={onLogoClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity focus:outline-none"
          >
            <div className="bg-purple-600 text-white font-bold text-xl p-3 rounded-lg">
              NPAT
            </div>
            <div className="text-xl font-semibold text-purple-600">
              Name Place<br />Animal Thing
            </div>
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full bg-purple-50 hover:bg-purple-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <span className="w-5">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`
            fixed inset-x-0 top-[73px] md:hidden transition-all duration-300 ease-in-out transform
            ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
          `}
        >
          <div className="bg-white/80 backdrop-blur-lg border-t border-purple-100">
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-2 gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      flex items-center space-x-3 p-3 rounded-xl transition-all duration-200
                      ${isActive(link.href)
                        ? 'bg-purple-100 text-purple-600'
                        : 'hover:bg-purple-50 text-gray-600 hover:text-purple-600'
                      }
                    `}
                  >
                    <span className="w-5">{link.icon}</span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 