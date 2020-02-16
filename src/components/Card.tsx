import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import { Cardback, CardInfo } from '../api';

declare module 'react-spring' {
  export const animated: any;
}

type CardProps = {
  cardback: Cardback;
  card: CardInfo;
  flipped: boolean;
  onClick: (card: CardInfo, index: number) => void;
};

const imgBaseClasses = 'Card cursor-pointer h-full mx-auto';

const Card = ({ cardback, card, flipped, onClick }: CardProps) => {
  const [hovering, setHovering] = useState(false);
  const { transform, opacity, filter } = useSpring({
    opacity: flipped ? 1 : 0,
    filter: `drop-shadow(${
      hovering ? 'rgb(255, 255, 255) 0px 3px 5px' : 'rgba(0, 0, 0, 0.6) 0px 3px 5px'
    })`,
    transform: `perspective(600px) scale(${hovering ? 1.05 : 1}) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <div>
      <a.img
        className={imgBaseClasses}
        src={cardback.image}
        alt="Classic Card Back"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={onClick}
        style={{
          display: flipped ? 'none' : 'block',
          filter,
          opacity: opacity.interpolate((o: any) => 1 - o),
          transform
        }}
      />
      <a.img
        className={imgBaseClasses}
        src={card.image}
        alt={card.name}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{
          opacity,
          filter,
          display: flipped ? 'block' : 'none',
          transform: transform.interpolate(t => `${t} rotateY(180deg)`)
        }}
      />
    </div>
  );
};

export default Card;
