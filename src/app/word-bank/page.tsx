'use client';

import { useState } from 'react';
import { hintsDatabase } from '@/lib/hintsDatabase';

export default function WordBankPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'name' | 'place' | 'animal' | 'thing'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('');

  const letters = Object.keys(hintsDatabase).sort();

  const categoryIcons = {
    name: '👤',
    place: '🌍',
    animal: '🦁',
    thing: '📦',
  };

  const getWordsForLetter = (letter: string) => {
    if (!hintsDatabase[letter]) return [];

    if (selectedCategory === 'all') {
      return {
        name: hintsDatabase[letter].name,
        place: hintsDatabase[letter].place,
        animal: hintsDatabase[letter].animal,
        thing: hintsDatabase[letter].thing,
      };
    }

    return {
      [selectedCategory]: hintsDatabase[letter][selectedCategory],
    };
  };

  const filteredWords = selectedLetter
    ? getWordsForLetter(selectedLetter)
    : Object.entries(hintsDatabase).reduce((acc, [letter, categories]) => {
        Object.entries(categories).forEach(([category, words]) => {
          if (selectedCategory === 'all' || selectedCategory === category) {
            if (!acc[category]) acc[category] = [];
            acc[category].push(...words);
          }
        });
        return acc;
      }, {} as Record<string, string[]>);

  const searchFilter = (words: string[]) => 
    words.filter(word => 
      word.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-8 text-center">
          Word Bank
        </h1>

        {/* Controls */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
                className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              >
                <option value="all">All Categories</option>
                <option value="name">Names</option>
                <option value="place">Places</option>
                <option value="animal">Animals</option>
                <option value="thing">Things</option>
              </select>
            </div>

            {/* Letter Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Starting Letter
              </label>
              <select
                value={selectedLetter}
                onChange={(e) => setSelectedLetter(e.target.value)}
                className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              >
                <option value="">All Letters</option>
                {letters.map((letter) => (
                  <option key={letter} value={letter}>
                    {letter}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Search
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search words..."
                className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-purple-500 focus:ring-purple-500 placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Word Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {Object.entries(filteredWords).map(([category, words]) => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-purple-50 dark:bg-purple-900/30 px-6 py-4 border-b border-purple-100 dark:border-purple-800">
                <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-2">
                  {categoryIcons[category as keyof typeof categoryIcons]} {category.charAt(0).toUpperCase() + category.slice(1)}s
                  <span className="text-sm font-normal text-purple-400 dark:text-purple-300 ml-2">
                    ({searchFilter(words).length} words)
                  </span>
                </h2>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {searchFilter(words).sort().map((word, index) => (
                    <span
                      key={`${word}-${index}`}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-800/50 transition-colors duration-200"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 