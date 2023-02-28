import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

const StyledGameCard = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  border: 1px solid green;
  border-radius: 0.5rem;
  position: relative;
  width: 150px;
  height: 250px;
  margin: 2px;
  opacity: ${(props) => (props.isDragging ? 0.5 : 1.0)};
`;

const GameCard = function CreateGameCard({ card }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'DRAGGABLE_CARD',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <StyledGameCard ref={drag} isDragging={isDragging} image={card} />
  );
};

export default GameCard;
