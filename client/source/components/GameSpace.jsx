import React from 'react';
import styled from 'styled-components';

import CardSlot from './CardSlot';


const StyledGameSpace = styled.div`
  display: ${(props) => (props.hide ? 'flex' : 'none')};
  justify-content: center;
  position: relative;
  color: white;
  border: 1px solid blue;
  margin: 10px;
`;

const cardSlots = ['LEFT', 'CENTER', 'RIGHT'];

const GameSpace = function CreateGameSpace({ planet, hide }) {
  return (
    <StyledGameSpace hide={hide}>
      {planet}
      {cardSlots.map((slot) => <CardSlot key={slot} slot={slot} />)}
    </StyledGameSpace>
  );
};

export default GameSpace;
