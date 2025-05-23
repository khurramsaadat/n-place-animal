import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomLetter(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function validateInput(input: string, letter: string): boolean {
  if (!input || !letter) return false;
  return input.trim().toUpperCase().startsWith(letter.toUpperCase());
}

export function calculateScore(answers: string[], allAnswers: string[][]): number {
  return answers.reduce((score, answer, index) => {
    if (!answer) return score;
    const otherAnswers = allAnswers[index] || [];
    const isDuplicate = otherAnswers.includes(answer.toLowerCase());
    return score + (isDuplicate ? 5 : 10);
  }, 0);
} 