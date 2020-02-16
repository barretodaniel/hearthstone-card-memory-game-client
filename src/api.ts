import ky from 'ky';
import { Difficulty } from './components/GameMenu';

const prefixUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://hearthstone-card-memory-game.herokuapp.com'
    : 'http://localhost:3001';

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
    .get('cards', {
      prefixUrl,
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
  return ky.get('cardback', { prefixUrl }).json<{ image: string }>();
}
const api = {
  getCards,
  getCardback
};
export default api;
