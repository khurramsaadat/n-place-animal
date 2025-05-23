'use client';

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

const GameResults = ({ answers, letter, score, onPlayAgain }: GameResultsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-2">Game Over!</h2>
        <p className="text-gray-600">
          Your score for letter <span className="font-bold">{letter}</span>:
          <span className="text-2xl font-bold text-purple-600 ml-2">{score}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(answers).map(([category, answer]) => (
          <div
            key={category}
            className="bg-purple-50 rounded-lg p-4"
          >
            <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">
              {category}
            </h3>
            <p className="text-lg font-medium text-gray-900">
              {answer || '-'}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4 pt-4">
        <button
          onClick={onPlayAgain}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-bold hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Play Again
        </button>
        <button
          onClick={() => window.location.href = '/leaderboard'}
          className="border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transform hover:scale-105 transition-all duration-200"
        >
          View Leaderboard
        </button>
      </div>

      <div className="text-center text-sm text-gray-500 pt-4">
        <p>Share your score:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <button
            className="text-gray-400 hover:text-purple-500 transition-colors"
            aria-label="Share on Twitter"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </button>
          <button
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameResults; 