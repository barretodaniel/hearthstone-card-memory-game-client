import React, { useEffect, useState } from 'react';
import api, { Cardback, CardInfo, Cards } from './api';
import GameBoard from './components/GameBoard';
import GameMenu, { Difficulty } from './components/GameMenu';
import WinScreen from './components/WinScreen';
import { shuffle } from './utils';

enum GameState {
  Menu,
  Playing,
  Winner
}

const rows = {
  [Difficulty.easy]: 4,
  [Difficulty.medium]: 6
};

const Game = () => {
  const [selectedDifficulty, setDifficulty] = useState(Difficulty.easy);
  const [cardback, setCardback] = useState<Cardback>({ image: '' });
  const [cards, setCards] = useState<Cards>({ cards: [] });
  const [gameState, setGameState] = useState(GameState.Menu);
  const [selectedCard, setSelectedCard] = useState<CardInfo | null>(null);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [boardLocked, setBoardLocked] = useState(false);

  const getCardBack = async () => {
    try {
      const resp = await api.getCardback();
      setCardback(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const getCards = async (difficulty: Difficulty) => {
    try {
      const resp = await api.getCards(difficulty);
      setCards({
        cards: shuffle([...resp.cards, ...resp.cards])
      });
      setGameState(GameState.Playing);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardClick = (card: CardInfo, index: number) => {
    if (boardLocked) {
      return;
    }

    const nextOpenCards = [...openCards, index];
    setOpenCards(nextOpenCards);

    if (!selectedCard) {
      setSelectedCard(card);
    } else if (card.id === selectedCard.id) {
      setSelectedCard(null);
      if (nextOpenCards.length === rows[selectedDifficulty] ** 2) {
        setTimeout(() => {
          setGameState(GameState.Winner);
        }, 700);
      }
    } else {
      setBoardLocked(true);
      setSelectedCard(null);
      setTimeout(() => {
        setBoardLocked(false);
        setOpenCards(openCards.slice(0, openCards.length - 1));
      }, 700);
    }
  };

  const handleNewGame = () => {
    setDifficulty(Difficulty.easy);
    setCards({ cards: [] });
    setSelectedCard(null);
    setOpenCards([]);
    setGameState(GameState.Menu);
  };

  useEffect(() => {
    getCardBack();
  }, []);

  const render = () => {
    switch (gameState) {
      case GameState.Menu:
        return (
          <GameMenu
            selectedDifficulty={selectedDifficulty}
            onDifficultySelect={setDifficulty}
            onStart={() => getCards(selectedDifficulty)}
          />
        );
      case GameState.Playing:
        return (
          <GameBoard
            difficulty={selectedDifficulty}
            cards={cards}
            cardback={cardback}
            openCards={openCards}
            onCardClick={handleCardClick}
          />
        );
      case GameState.Winner:
        return <WinScreen onNewGame={handleNewGame} />;
    }
  };

  return <div className="p-4 h-full container mx-auto">{render()}</div>;
};

export default Game;
