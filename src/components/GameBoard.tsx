import React from 'react';
import { Cardback, Cards, CardInfo } from '../api';
import { Difficulty } from './GameMenu';
import Card from './Card';

type GameBoardProps = {
  cardback: Cardback;
  cards: Cards;
  difficulty: Difficulty;
  openCards: number[];
  onCardClick: (card: CardInfo, index: number) => void;
};

const rows = {
  [Difficulty.easy]: 4,
  [Difficulty.medium]: 6
};

const GameBoard = ({ cards, cardback, difficulty, openCards, onCardClick }: GameBoardProps) => {
  return (
    <div
      className={`grid grid-rows-${rows[difficulty]} grid-flow-col row-gap-4 col-gap-4 max-h-full`}
    >
      {cards.cards.map((card, i) => (
        <Card
          key={i}
          card={card}
          cardback={cardback}
          flipped={openCards.includes(i)}
          onClick={() => onCardClick(card, i)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
