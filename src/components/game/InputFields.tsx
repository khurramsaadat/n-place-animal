'use client';

import { ChangeEvent } from 'react';
import CategoryIcon from '@/components/ui/CategoryIcon';

interface Answers {
  name: string;
  place: string;
  animal: string;
  thing: string;
}

interface InputFieldsProps {
  currentLetter: string;
  answers: Answers;
  onAnswerChange: (field: keyof Answers, value: string) => void;
  isDisabled?: boolean;
}

const InputFields = ({ currentLetter, answers, onAnswerChange, isDisabled = false }: InputFieldsProps) => {
  const handleChange = (field: keyof Answers) => (e: ChangeEvent<HTMLInputElement>) => {
    onAnswerChange(field, e.target.value);
  };

  // Theme colors for each category
  const categoryColors = {
    name: {
      bg: 'bg-purple-100',
      border: 'border-purple-200',
      focusBorder: 'focus:border-purple-500',
      focusRing: 'focus:ring-purple-200',
      text: 'text-purple-700',
      label: 'text-purple-600'
    },
    place: {
      bg: 'bg-indigo-100',
      border: 'border-indigo-200',
      focusBorder: 'focus:border-indigo-500',
      focusRing: 'focus:ring-indigo-200',
      text: 'text-indigo-700',
      label: 'text-indigo-600'
    },
    animal: {
      bg: 'bg-blue-100',
      border: 'border-blue-200',
      focusBorder: 'focus:border-blue-500',
      focusRing: 'focus:ring-blue-200',
      text: 'text-blue-700',
      label: 'text-blue-600'
    },
    thing: {
      bg: 'bg-violet-100',
      border: 'border-violet-200',
      focusBorder: 'focus:border-violet-500',
      focusRing: 'focus:ring-violet-200',
      text: 'text-violet-700',
      label: 'text-violet-600'
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
      {Object.entries(answers).map(([field, value]) => (
        <div key={field} className="relative">
          <label className={`block text-sm font-semibold mb-1 sm:mb-2 capitalize flex items-center gap-1 ${categoryColors[field as keyof Answers].label}`}>
            <CategoryIcon category={field as keyof Answers} className="w-4 h-4" />
            {field}
          </label>
          <input
            type="text"
            value={value}
            onChange={handleChange(field as keyof Answers)}
            disabled={isDisabled}
            placeholder={`Enter a ${field} starting with '${currentLetter}'`}
            className={`
              w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border text-sm sm:text-base
              transition-colors duration-200
              ${isDisabled 
                ? 'bg-gray-50 border-gray-200 text-gray-400' 
                : `${categoryColors[field as keyof Answers].bg} 
                   ${categoryColors[field as keyof Answers].border} 
                   ${categoryColors[field as keyof Answers].focusBorder} 
                   focus:ring-2 
                   ${categoryColors[field as keyof Answers].focusRing}
                   ${categoryColors[field as keyof Answers].text}`
              }
            `}
          />
        </div>
      ))}
    </div>
  );
};

export default InputFields; 