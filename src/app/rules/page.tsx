export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-600 mb-8 text-center">
          How to Play
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Game Rules</h2>
            <div className="prose prose-purple max-w-none">
              <ol className="list-decimal list-inside space-y-4 text-gray-600">
                <li>
                  <span className="font-medium">Starting the Game:</span> Click the
                  "Start Game" button to begin. The game will announce a random
                  letter.
                </li>
                <li>
                  <span className="font-medium">Fill in the Categories:</span> You
                  have 60 seconds to fill in all four categories:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>Name (person, character, brand)</li>
                    <li>Place (city, country, landmark)</li>
                    <li>Animal (any species)</li>
                    <li>Thing (object, concept)</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Scoring:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>Unique answer: 10 points</li>
                    <li>Duplicate answer: 5 points</li>
                    <li>Invalid or blank answer: 0 points</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Rules:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>All answers must start with the given letter</li>
                    <li>Answers must be real words or names</li>
                    <li>Spelling matters</li>
                    <li>No repeating the same word in different categories</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips</h2>
            <div className="bg-purple-50 rounded-lg p-4 text-gray-600">
              <ul className="list-disc list-inside space-y-2">
                <li>Think of common categories first</li>
                <li>Use the timer to pace yourself</li>
                <li>Keep a mental list of words for tricky letters</li>
                <li>Practice with different letters to improve speed</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 