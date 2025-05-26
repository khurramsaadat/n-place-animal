export interface GameResult {
  letter: string;
  score: number;
  timeUsed: number;
  answers: {
    name: string;
    place: string;
    animal: string;
    thing: string;
  };
} 