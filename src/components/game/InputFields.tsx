'use client';

import { ChangeEvent } from 'react';

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name Input */}
      <div className="relative">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          value={answers.name}
          onChange={handleChange('name')}
          disabled={isDisabled}
          placeholder={`Enter a name starting with '${currentLetter}'`}
          className={`
            w-full px-4 py-2 rounded-lg border
            ${isDisabled 
              ? 'bg-gray-50 border-gray-200 text-gray-400' 
              : 'bg-white border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
            }
            transition-colors duration-200
          `}
        />
      </div>

      {/* Place Input */}
      <div className="relative">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Place
        </label>
        <input
          type="text"
          value={answers.place}
          onChange={handleChange('place')}
          disabled={isDisabled}
          placeholder={`Enter a place starting with '${currentLetter}'`}
          className={`
            w-full px-4 py-2 rounded-lg border
            ${isDisabled 
              ? 'bg-gray-50 border-gray-200 text-gray-400' 
              : 'bg-white border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
            }
            transition-colors duration-200
          `}
        />
      </div>

      {/* Animal Input */}
      <div className="relative">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Animal
        </label>
        <input
          type="text"
          value={answers.animal}
          onChange={handleChange('animal')}
          disabled={isDisabled}
          placeholder={`Enter an animal starting with '${currentLetter}'`}
          className={`
            w-full px-4 py-2 rounded-lg border
            ${isDisabled 
              ? 'bg-gray-50 border-gray-200 text-gray-400' 
              : 'bg-white border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
            }
            transition-colors duration-200
          `}
        />
      </div>

      {/* Thing Input */}
      <div className="relative">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Thing
        </label>
        <input
          type="text"
          value={answers.thing}
          onChange={handleChange('thing')}
          disabled={isDisabled}
          placeholder={`Enter a thing starting with '${currentLetter}'`}
          className={`
            w-full px-4 py-2 rounded-lg border
            ${isDisabled 
              ? 'bg-gray-50 border-gray-200 text-gray-400' 
              : 'bg-white border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
            }
            transition-colors duration-200
          `}
        />
      </div>
    </div>
  );
};

export default InputFields; 