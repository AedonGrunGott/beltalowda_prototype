import React from 'react';
import styled from 'styled-components';


const StyledCardSlot = styled.div`
  border: 1px dashed green;
  width: 150px;
  height: 250px;
  margin: 2px;
`;


const CardSlot = function CreateCardSlot() {
  return (
    <StyledCardSlot>
      CARD SLOT
    </StyledCardSlot>
  );
};


export default CardSlot;
