export default function RulesPage() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-8 text-center">
          How to Play
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-8">
          {/* Game Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Game Overview</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Name Place Animal Thing is a word game where you need to think of words
              starting with a given letter for different categories. Think fast and be
              creative!
            </p>
          </section>

          {/* Game Rules */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Game Rules</h2>
            <div className="prose prose-purple dark:prose-invert max-w-none">
              <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-300">
                <li>
                  <span className="font-medium">Starting the Game:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>Click the "Start Game" button to begin</li>
                    <li>The game will announce a random letter</li>
                    <li>Each letter appears only once per session until you refresh the page</li>
                    <li>The timer starts after the letter announcement</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Game Timer:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>You have 50 seconds in regular mode</li>
                    <li>60 seconds in training mode</li>
                    <li>A ticking sound plays in the last 10 seconds</li>
                    <li>Submit your answers before time runs out</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Categories:</span> Fill in all four categories:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>Name (person, character, brand)</li>
                    <li>Place (city, country, landmark)</li>
                    <li>Animal (any species)</li>
                    <li>Thing (object, concept)</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Scoring System:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>Unique answer: 10 points per category</li>
                    <li>Duplicate answer: 5 points</li>
                    <li>Invalid or blank answer: 0 points</li>
                    <li>Speed bonus: 2 points per second remaining</li>
                    <li>Maximum base score: 40 points (10 points × 4 categories)</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Answer Rules:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>All answers must start with the given letter</li>
                    <li>Answers must be real words or names</li>
                    <li>Spelling matters</li>
                    <li>No repeating the same word in different categories</li>
                    <li>Minimum word length: 2 characters</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* Game Modes */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Game Modes</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <div>
                <h3 className="font-medium text-lg text-purple-600 dark:text-purple-400">Regular Mode</h3>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                  <li>50 seconds per round</li>
                  <li>Compete for high scores</li>
                  <li>Track your performance on the leaderboard</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg text-purple-600 dark:text-purple-400">Training Mode</h3>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                  <li>60 seconds per round</li>
                  <li>Access to hints for each category</li>
                  <li>Practice without affecting your leaderboard score</li>
                  <li>Track your progress and category strengths</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tips for Success */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Tips for Success</h2>
            <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-6 text-gray-600 dark:text-gray-300">
              <ul className="list-disc list-inside space-y-3">
                <li>Use training mode to practice difficult letters</li>
                <li>Keep track of your category strengths and focus on improving weaker areas</li>
                <li>Build a mental database of words for challenging letters (Q, X, Z)</li>
                <li>Submit your answers quickly to earn speed bonuses</li>
                <li>Use the hints feature in training mode to learn new words</li>
                <li>Practice regularly to improve your response time</li>
              </ul>
            </div>
          </section>

          {/* Additional Information */}
          <section className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Additional Information</h2>
            <div className="text-gray-600 dark:text-gray-300 space-y-2">
              <p>• The game tracks your progress and maintains statistics in training mode</p>
              <p>• Letters are randomized and won't repeat until you refresh the page</p>
              <p>• Voice announcements guide you through the game</p>
              <p>• Background music can be toggled on/off</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 