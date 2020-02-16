import React from 'react';
import Button from './Button';

type WinScreenProps = {
  onNewGame: () => void;
};

const WinScreen = ({ onNewGame }: WinScreenProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-serif text-6xl text-center text-orange-900">Congratulations</div>
      <Button onClick={onNewGame}>Play Again</Button>
    </div>
  );
};

export default WinScreen;
