'use client';

import { useState, useEffect } from 'react';

interface HintPanelProps {
  letter: string;
}

interface CategoryHints {
  [key: string]: string[];
}

const HintPanel = ({ letter }: HintPanelProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hints, setHints] = useState<CategoryHints>({
    name: [],
    place: [],
    animal: [],
    thing: [],
  });

  useEffect(() => {
    if (letter) {
      setIsLoading(true);
      Promise.all([
        fetchHintsForCategory('name'),
        fetchHintsForCategory('place'),
        fetchHintsForCategory('animal'),
        fetchHintsForCategory('thing')
      ]).then(() => setIsLoading(false));
    }
  }, [letter]);

  const fetchHintsForCategory = async (category: string) => {
    let searchQuery = '';
    switch (category) {
      case 'name':
        searchQuery = `popular ${letter} names first names given names`;
        break;
      case 'place':
        searchQuery = `famous places cities countries starting with letter ${letter}`;
        break;
      case 'animal':
        searchQuery = `animals species wildlife starting with letter ${letter}`;
        break;
      case 'thing':
        searchQuery = `common objects items things starting with letter ${letter}`;
        break;
    }

    try {
      const results = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&category=${category}&letter=${letter}`);
      const data = await results.json();
      
      // Take only the first 3 hints
      const limitedHints = (data.hints || []).slice(0, 3);
      
      setHints(prev => ({
        ...prev,
        [category]: limitedHints,
      }));
    } catch (error) {
      console.error('Error fetching hints:', error);
      setHints(prev => ({
        ...prev,
        [category]: [],
      }));
    }
  };

  const formatHints = (hints: string[]): string => {
    if (hints.length === 0) return 'No hints available.';
    return `${hints.join(', ')}.`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">Hints</h2>
      
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-32 space-y-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          <p className="text-gray-500">Loading hints...</p>
        </div>
      ) : !letter ? (
        <div className="text-center text-gray-500 py-8">
          <p>Waiting for a letter...</p>
        </div>
      ) : (
        <div className="space-y-3">
          {Object.entries(hints).map(([category, categoryHints]) => (
            <div key={category} className="bg-purple-50 p-4 rounded-lg">
              <div className="flex flex-wrap gap-2 items-baseline">
                <span className="font-semibold text-purple-700 capitalize min-w-[4rem]">
                  {category}:
                </span>
                <span className="text-gray-700">
                  {formatHints(categoryHints)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tips Section */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Quick Tips</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Think of common prefixes with this letter</li>
          <li>• Consider different languages and cultures</li>
          <li>• Try to make connections with familiar words</li>
          {letter && (
            <li className="text-purple-600">
              • For words with '{letter}', try thinking about {getCategoryTip('general', letter)}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

const getCategoryTip = (category: string, letter: string): string => {
  const tips = {
    general: {
      default: "common words and names from different cultures",
      A: "words related to actions, places in Asia, or animals in Africa",
      B: "body parts, places near beaches, or birds",
      C: "colors, coastal cities, or creatures",
      D: "descriptive words, desert locations, or domestic animals",
      E: "emotions, European places, or exotic animals",
      // Add more letter-specific tips as needed
    }
  };

  return tips.general[letter as keyof typeof tips.general] || tips.general.default;
};

export default HintPanel; 