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

const GameSpace = function CreateGameSpace() {
  return (
    <StyledGameSpace>
      GAME SPACE
      <CardSlot />
      <CardSlot />
      <CardSlot />
    </StyledGameSpace>
  );
};

export default GameSpace;
