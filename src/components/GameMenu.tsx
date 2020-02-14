import React from 'react';
import Button from './Button';
import Radio from './Radio';

const GameMenu = () => {
  return (
    <div className="shadow-lg border rounded border-gray-200 p-4 w-1/2 mx-auto">
      <div className="mb-4">
        <span className="text-gray-700">Difficulty</span>
        <div className="mt-2">
          <Radio name="difficulty">Easy</Radio>
          <Radio name="difficulty" className="ml-6">
            Medium
          </Radio>
          <Radio name="difficulty" className="ml-6">
            Hard
          </Radio>
        </div>
      </div>
      <Button>Start</Button>
    </div>
  );
};

export default GameMenu;
