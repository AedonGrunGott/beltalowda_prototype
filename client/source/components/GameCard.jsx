import React, { useState } from 'react';
import styled from 'styled-components';


const StyledGameCard = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  border-radius: 0.5rem;
  position: relative;
  width: 250px;
  height: 150px;
  margin: 4px;
  opacity: ${(props) => (props.isDragging ? 0.5 : 1.0)};
`;

const StyledTitle = styled.span`
  font-family: 'Press Start 2P';
  margin: 10px;
`;

const GameCard = function CreateGameCard({ card }) {
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
      draggable="true"
      isDragging={isDragging}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      image={card.url}
    >
      <StyledTitle>
        {card.name}
      </StyledTitle>
    </StyledGameCard>
  );
};

export default GameCard;
