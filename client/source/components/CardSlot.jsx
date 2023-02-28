import React from 'react';
import styled from 'styled-components';

import { useDrop } from 'react-dnd';


const StyledCardSlot = styled.div`
  background-color: ${(props) => (props.isOver ? 'green' : null)};
  border: 1px dashed green;
  width: 150px;
  height: 250px;
  margin: 2px;
`;


const CardSlot = function CreateCardSlot() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'DRAGGABLE_CARD',
    drop: () => {
      console.log('DROPPED CARD');
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  return (
    <StyledCardSlot isOver={isOver} ref={drop}>
      CARD SLOT
    </StyledCardSlot>
  );
};


export default CardSlot;
