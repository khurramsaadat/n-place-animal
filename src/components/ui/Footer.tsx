'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const quickLinks = [
    { href: '/how-to-play', label: 'How to Play' },
    { href: '/leaderboard', label: 'Leaderboard' },
    { href: '/training', label: 'Training' },
    { href: '/feedback', label: 'Feedback' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Game Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">About the Game</h3>
            <p className="text-gray-400">
              A fun and educational word game that challenges your knowledge of names,
              places, animals, and things.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      isActive(link.href)
                        ? 'text-purple-400 font-medium'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label="Share on Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label="Share on Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Name Place Animal Thing. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 