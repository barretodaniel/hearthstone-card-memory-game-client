import ky from 'ky';
import { Difficulty } from './components/GameMenu';

export type CardInfo = {
  id: number;
  slug: string;
  name: string;
  image: string;
};

export type Cards = {
  cards: CardInfo[];
};

function getCards(difficulty: Difficulty) {
  return ky
    .get('http://localhost:3001/cards', {
      searchParams: {
        difficulty
      }
    })
    .json<Cards>();
}

export type Cardback = {
  image: string;
};

function getCardback() {
  return ky.get('http://localhost:3001/cardback').json<{ image: string }>();
}
const api = {
  getCards,
  getCardback
};
export default api;
