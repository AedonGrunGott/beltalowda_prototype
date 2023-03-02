import React, { useState } from 'react';
import styled from 'styled-components';


const StyledGameCard = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  border: 2px solid RGBA(120,120,120,0.5);
  border-radius: 0.5rem;
  position: relative;
  width: 250px;
  height: 150px;
  margin: 4px;
  opacity: ${(props) => (props.isDragging ? 0.5 : 1.0)};
`;

const StyledTitle = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 0.25rem 1rem;
  font-family: 'Press Start 2P';
  user-select: none;
`;

const GameCard = function CreateGameCard({ card, commited }) {
  const [isDragging, setIsDragging] = useState(false);
  function handleDragStart(event) {
    setIsDragging(true);
    event.dataTransfer.setData('card', event.target.id);
  }

  function handleDragEnd() {
    setIsDragging(false);
  }

  return (
    <StyledGameCard
      id={card.name}
      draggable={!commited}
      isDragging={isDragging}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      image={card.url}
    >
      <StyledTitle color={card.color}>
        {card.name}
      </StyledTitle>
    </StyledGameCard>
  );
};

export default GameCard;
