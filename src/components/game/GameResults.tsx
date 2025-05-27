'use client';

import CategoryIcon from '@/components/ui/CategoryIcon';

interface GameResultsProps {
  answers: {
    name: string;
    place: string;
    animal: string;
    thing: string;
  };
  letter: string;
  score: number;
  onPlayAgain: () => void;
}

const GameResults = ({ 
  answers,
  letter, 
  score,
  onPlayAgain,
}: GameResultsProps) => {
  // Function to capitalize first letter
  const capitalizeFirstLetter = (text: string): string => {
    if (!text) return '-';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 space-y-8 max-w-2xl mx-auto">
      {/* Header with Trophy Icon */}
      <div className="text-center space-y-4">
        <div className="inline-block p-3 bg-purple-100 rounded-full">
          <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Game Complete!</h2>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-lg text-gray-600">Letter:</span>
          <span className="text-2xl font-bold text-purple-600 bg-purple-100 px-4 py-1 rounded-full">{letter}</span>
        </div>
      </div>

      {/* Score Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-6 text-white text-center">
        <div className="space-y-2">
          <p className="text-purple-100 text-lg">Final Score</p>
          <p className="text-4xl font-bold">{score}</p>
          <p className="text-sm text-purple-200">({score/10} correct answers)</p>
        </div>
      </div>

      {/* Answers Review */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Your Answers:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(answers).map(([category, answer]) => (
            <div key={category} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <CategoryIcon category={category as 'name' | 'place' | 'animal' | 'thing'} className="w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-500 capitalize">{category}</p>
              </div>
              <p className="text-lg font-medium text-gray-800">
                {capitalizeFirstLetter(answer) || '-'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Play Again Button */}
      <div className="text-center">
        <button
          onClick={onPlayAgain}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameResults; 