import React from 'react';
import styled from 'styled-components';

import GameCard from './GameCard';


const StyledHandSpace = styled.div`
  display: flex;
  min-height: 100px;
  position: relative;
  color: white;
  border: 1px solid red;
  margin: 2px;
`;

const cardImages = [
  'https://static.wikia.nocookie.net/expanse/images/1/1a/Razorback.jpg',
  'https://static.wikia.nocookie.net/expanse/images/5/54/RociArtS4.png',
  'https://static.wikia.nocookie.net/expanse/images/1/16/Tynan_.png'];

function handleDrop(event) {
  console.log('dropped');
  event.preventDefault();
  const data = event.dataTransfer.getData('json', event.target.id);
  event.target.appendChild(document.getElementById(data));
}

function allowDrop(event) {
  event.preventDefault();
}

const HandSpace = function CreateHandSpace() {
  return (
    <StyledHandSpace onDragOver={allowDrop} onDrop={handleDrop}>
      HAND SPACE
      {cardImages.map((card) => <GameCard key={card} card={card} />)}
    </StyledHandSpace>
  );
};

export default HandSpace;
