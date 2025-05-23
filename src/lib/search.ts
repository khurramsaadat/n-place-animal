type WordCategory = 'name' | 'place' | 'animal' | 'thing';
type Letter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' |
             'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

type WordDictionary = Record<WordCategory, Partial<Record<Letter, string[]>>>;

// Moving the common words and search logic to client-side
export const commonWords: WordDictionary = {
  name: {
    A: ['Adam', 'Alice', 'Alex', 'Anna', 'Andrew', 'Amy', 'Aaron', 'Abigail'],
    B: ['Benjamin', 'Brian', 'Brandon', 'Barbara', 'Beth', 'Bruce', 'Bill', 'Bob']
  },
  place: {
    A: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'Atlanta'],
    B: ['Boston', 'Baltimore', 'Berlin', 'Brussels', 'Bangkok']
  },
  animal: {
    A: ['Ant', 'Antelope', 'Ape', 'Alligator', 'Alpaca'],
    B: ['Bear', 'Beaver', 'Bee', 'Buffalo', 'Butterfly']
  },
  thing: {
    A: ['Apple', 'Airplane', 'Arrow', 'Anchor', 'Axe'],
    B: ['Ball', 'Book', 'Bottle', 'Box', 'Brush']
  }
};

export async function searchWords(
  query: string,
  category: WordCategory,
  letter: string
): Promise<string[]> {
  try {
    const upperLetter = letter.toUpperCase() as Letter;
    const categoryWords = commonWords[category];
    if (!categoryWords) {
      return [];
    }

    const letterWords = categoryWords[upperLetter];
    if (!letterWords) {
      return [];
    }

    // Filter and sort words based on the query
    return letterWords
      .filter((word: string) => word.toLowerCase().includes(query.toLowerCase()))
      .sort((a: string, b: string) => a.localeCompare(b))
      .slice(0, 8);
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
} 