import React from 'react';
import styled from 'styled-components';

import CardSlot from './CardSlot';


const StyledGameSpace = styled.div`
  display: ${(props) => (props.hide ? 'flex' : 'none')};
  justify-content: center;
  position: relative;
  color: white;
  margin: 10px;
`;

const cardSlots = ['LEFT', 'CENTER', 'RIGHT'];

const GameSpace = function CreateGameSpace({ planet, hide }) {
  return (
    <StyledGameSpace hide={hide}>
      {cardSlots.map((slot) => <CardSlot drag color="RGBA(20,120,80,0.5)" key={slot} slot={slot} />)}
    </StyledGameSpace>
  );
};

export default GameSpace;
