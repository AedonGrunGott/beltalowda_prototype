import React from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';

import GameCard from './GameCard';


const StyledHandSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 220px;
  position: relative;
  color: white;
  margin: 10px 0;
  bottom: 10px;
  position: absolute;
  width: 100%;
  background-color: RGBA(60,80,100,0.5);
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
              rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
              rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;


const HandSpace = function CreateHandSpace({ cardData, commited, user }) {
  const [clickSound] = useSound(
    '/sounds/card_touch.wav',
    { volume: 1.0 },
  );

  function handleDrop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('card', event.target.id);
    event.target.appendChild(document.getElementById(data));
    clickSound();
  }

  function handleDragOver(event) {
    event.preventDefault();
    console.log('hover hand');
  }

  return (
    <StyledHandSpace onDragOver={handleDragOver} onDrop={handleDrop}>
      {cardData.map((card) => {
        if (card.level <= user.level) {
          return <GameCard key={card.name} card={card} commited={commited} />
        }
      })}
    </StyledHandSpace>
  );
};

export default HandSpace;
