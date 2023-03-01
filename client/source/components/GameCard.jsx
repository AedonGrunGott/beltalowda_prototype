import React from 'react';
import styled from 'styled-components';

const StyledGameCard = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  border: 1px solid green;
  border-radius: 0.5rem;
  position: relative;
  width: 150px;
  height: 250px;
  margin: 4px;
`;

function handleDrag(event) {
  console.log('dragging');
  event.dataTransfer.setData('json', event.target.id);
}

const GameCard = function CreateGameCard({ card }) {
  return (
    <StyledGameCard id={card} draggable="true" onDragStart={handleDrag} image={card} />
  );
};

export default GameCard;
