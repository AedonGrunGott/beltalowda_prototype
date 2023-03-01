import React from 'react';
import styled from 'styled-components';

import CardSlot from './CardSlot';


const StyledGameSpace = styled.div`
  display: flex;
  position: relative;
  color: white;
  border: 1px solid blue;
  margin: 2px;
`;

const cardSlots = ['LEFT', 'CENTER', 'RIGHT'];

const GameSpace = function CreateGameSpace() {
  return (
    <StyledGameSpace>
      GAME SPACE
      {cardSlots.map((slot) => <CardSlot key={slot} slot={slot} />)}
    </StyledGameSpace>
  );
};

export default GameSpace;
