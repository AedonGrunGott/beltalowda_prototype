import React from 'react';
import interact from 'interactjs';
import styled from 'styled-components';

const StyledGameCard = styled.div`
  background-color: grey;
  border: 1px solid green;
  position: relative;
  width: 200px;
  height: 400px;
`;

const position = { x: 0, y: 0 }

interact('.draggable').draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target);
    },
    move(event) {
      position.x += event.dx;
      position.y += event.dy;

      event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
    },
  },
});


const GameCard = function CreateGameCard() {
  return (
    <StyledGameCard className="draggable">GAME CARD</StyledGameCard>
  );
};

export default GameCard;
