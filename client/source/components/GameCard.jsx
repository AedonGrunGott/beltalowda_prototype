import React from 'react';
import styled from 'styled-components';

const StyledGameCard = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  border: 1px solid green;
  border-radius: 0.5rem;
  position: relative;
  width: 150px;
  height: 250px;
  margin: 2px;
`;

const GameCard = function CreateGameCard({ card }) {
  return (
    <StyledGameCard image={card} />
  );
};

export default GameCard;
