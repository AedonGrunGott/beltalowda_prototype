import React from 'react';
import styled from 'styled-components';

import GameCard from './GameCard';


const StyledHandSpace = styled.div`
  display: flex;
  position: relative;
  color: white;
  border: 1px solid red;
  margin: 2px;
`;

const cardImages = [
  'https://static.wikia.nocookie.net/expanse/images/1/1a/Razorback.jpg',
  'https://static.wikia.nocookie.net/expanse/images/5/54/RociArtS4.png',
  'https://static.wikia.nocookie.net/expanse/images/1/16/Tynan_.png'];

const HandSpace = function CreateHandSpace() {
  return (
    <StyledHandSpace>
      HAND SPACE
      {cardImages.map((card) => <GameCard key={card} card={card} />)}
    </StyledHandSpace>
  );
};

export default HandSpace;
