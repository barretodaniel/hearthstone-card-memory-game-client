import React, { ChangeEventHandler } from 'react';
import Button from './Button';
import Radio from './Radio';

export enum Difficulty {
  easy = 'easy',
  medium = 'medium'
}

type GameMenuProps = {
  selectedDifficulty: Difficulty;
  onDifficultySelect: (difficulty: Difficulty) => void;
  onStart: () => void;
};

const GameMenu = ({ selectedDifficulty, onDifficultySelect, onStart }: GameMenuProps) => {
  const handleDifficultyChange: ChangeEventHandler<HTMLInputElement> = e => {
    onDifficultySelect(e.currentTarget.value as Difficulty);
  };

  return (
    <div className="shadow-2xl border bg-white rounded border-gray-200 p-4 w-1/2 mx-auto">
      <div className="mb-4">
        <span className="text-gray-800 font-serif">Difficulty</span>
        <div className="mt-2">
          <Radio
            name="difficulty"
            checked={selectedDifficulty === Difficulty.easy}
            value={Difficulty.easy}
            onChange={handleDifficultyChange}
          >
            Easy
          </Radio>
          <Radio
            className="ml-6"
            name="difficulty"
            checked={selectedDifficulty === Difficulty.medium}
            value={Difficulty.medium}
            onChange={handleDifficultyChange}
          >
            Medium
          </Radio>
        </div>
      </div>
      <Button onClick={onStart}>Start</Button>
    </div>
  );
};

export default GameMenu;
