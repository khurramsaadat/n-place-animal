'use client';

interface GameResultsProps {
  answers: {
    name: string;
    place: string;
    animal: string;
    thing: string;
  };
  marks?: {
    name: number;
    place: number;
    animal: number;
    thing: number;
  };
  letter: string;
  score: number;
  onPlayAgain: () => void;
  completionTime?: number; // Time remaining when done
  totalTime?: number; // Total time allowed
  isTrainingMode?: boolean; // Add this prop
}

const GameResults = ({ 
  answers, 
  marks = {
    name: 10,
    place: 10,
    animal: 10,
    thing: 10
  },
  letter, 
  score, 
  onPlayAgain,
  completionTime = 0,
  totalTime = 45,
  isTrainingMode = false // Add default value
}: GameResultsProps) => {
  const timeUsed = totalTime - completionTime;
  const speedBonus = completionTime > 0 ? Math.floor(completionTime * 2) : 0;
  const totalScore = score + speedBonus;

  // Function to capitalize first letter
  const capitalizeFirstLetter = (text: string): string => {
    if (!text) return '-';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  // Category icons mapping
  const categoryIcons = {
    name: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    place: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    animal: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    thing: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
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
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-purple-100">Base Score</p>
            <div className="flex items-center justify-center space-x-1">
              <p className="text-2xl font-bold">{score}</p>
              <span className="text-sm text-purple-200">/40</span>
            </div>
          </div>
          <div>
            <p className="text-purple-100">Speed Bonus</p>
            <p className="text-2xl font-bold">+{speedBonus}</p>
          </div>
          <div>
            <p className="text-purple-100">Total Score</p>
            <p className="text-3xl font-bold">{totalScore}</p>
          </div>
        </div>
      </div>

      {/* Time Stats */}
      <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
        <div className="text-center">
          <p className="text-sm text-gray-500">Time Used</p>
          <p className="text-xl font-semibold text-gray-700">{timeUsed}s</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Time Remaining</p>
          <p className="text-xl font-semibold text-gray-700">{completionTime}s</p>
        </div>
      </div>

      {/* Answers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(answers).map(([category, answer]) => (
          <div
            key={category}
            className="bg-purple-50 rounded-lg p-4 transform transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-purple-600">{categoryIcons[category as keyof typeof categoryIcons]}</span>
                <h3 className="text-sm font-medium text-purple-600 uppercase">
                  {category}
                </h3>
              </div>
              <div className="flex items-center space-x-1">
                <span className={`text-sm font-medium ${marks[category as keyof typeof marks] === 10 ? 'text-green-600' : 'text-orange-500'}`}>
                  {marks[category as keyof typeof marks]}
                </span>
                <span className="text-sm text-gray-400">/10</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium text-gray-900">
                {capitalizeFirstLetter(answer)}
              </p>
              {answer && (
                <div className={`h-2 w-2 rounded-full ${marks[category as keyof typeof marks] === 10 ? 'bg-green-500' : 'bg-orange-500'}`} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <button
          onClick={onPlayAgain}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-bold hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Play Again</span>
        </button>
        {/* Only show leaderboard button in regular mode */}
        {!isTrainingMode && (
          <button
            onClick={() => window.location.href = '/leaderboard'}
            className="border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Leaderboard</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default GameResults; 