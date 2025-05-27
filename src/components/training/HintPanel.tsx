'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { hintsDatabase } from '@/lib/hintsDatabase';
import CategoryIcon from '@/components/ui/CategoryIcon';

interface HintPanelProps {
  letter: string;
}

const HintPanel = ({ letter }: HintPanelProps) => {
  const [hints, setHints] = useState({
    name: [] as string[],
    place: [] as string[],
    animal: [] as string[],
    thing: [] as string[],
  });

  // Keep track of previously shown hints
  const previousHints = useRef<{
    [key: string]: {
      [category: string]: Set<string>;
    };
  }>({});

  const getRandomHints = useCallback((array: string[], count: number, category: string): string[] => {
    if (!array.length) return [];

    // Initialize tracking for this letter if not exists
    if (!previousHints.current[letter]) {
      previousHints.current[letter] = {
        name: new Set(),
        place: new Set(),
        animal: new Set(),
        thing: new Set(),
      };
    }

    const usedHints = previousHints.current[letter][category];
    
    // If we've used all hints, reset the tracking
    if (usedHints.size >= array.length) {
      usedHints.clear();
    }

    // Filter out previously shown hints
    const availableHints = array.filter(hint => !usedHints.has(hint));
    
    // If we don't have enough available hints, clear some old ones
    if (availableHints.length < count) {
      usedHints.clear();
    }

    // Shuffle available hints
    const shuffled = [...availableHints].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    // Track the newly selected hints
    selected.forEach(hint => usedHints.add(hint));

    return selected;
  }, [letter]);

  useEffect(() => {
    if (letter && hintsDatabase[letter]) {
      // Get random hints for each category (increased to 5)
      const randomHints = {
        name: getRandomHints(hintsDatabase[letter].name, 5, 'name'),
        place: getRandomHints(hintsDatabase[letter].place, 5, 'place'),
        animal: getRandomHints(hintsDatabase[letter].animal, 5, 'animal'),
        thing: getRandomHints(hintsDatabase[letter].thing, 5, 'thing'),
      };
      setHints(randomHints);
    } else {
      setHints({
        name: [],
        place: [],
        animal: [],
        thing: [],
      });
    }
  }, [letter, getRandomHints]);

  const formatHints = (hintArray: string[]): string => {
    if (hintArray.length === 0) return 'No hints available.';
    return `${hintArray.join(' • ')}.`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">Hints</h2>
      
      {!letter ? (
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 py-6">
          <p>Waiting for a letter...</p>
        </div>
      ) : (
        <div className="space-y-2">
          {Object.entries(hints).map(([category, categoryHints]) => (
            <div key={category} className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg">
              <div className="flex flex-wrap gap-2 items-baseline">
                <span className="text-xs font-medium text-purple-700 dark:text-purple-300 capitalize min-w-[4rem] flex items-center gap-1">
                  <CategoryIcon category={category as 'name' | 'place' | 'animal' | 'thing'} className="w-4 h-4" />
                  {category}:
                </span>
                <span className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  {formatHints(categoryHints)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tips Section */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Quick Tips</h3>
        <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1.5">
          <li>• Think of common prefixes with this letter</li>
          <li>• Consider different languages and cultures</li>
          <li>• Try to make connections with familiar words</li>
          {letter && (
            <li className="text-purple-600 dark:text-purple-400">
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