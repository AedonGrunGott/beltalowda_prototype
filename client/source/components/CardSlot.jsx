import React from 'react';
import styled from 'styled-components';


const StyledCardSlot = styled.div`
  border: 1px dashed green;
  width: 150px;
  height: 250px;
  margin: 2px;
`;

function handleDrop(event) {
  console.log('dropped');
  event.preventDefault();
  const data = event.dataTransfer.getData('json', event.target.id);
  event.target.appendChild(document.getElementById(data));
}

function allowDrop(event) {
  event.preventDefault();
}

const CardSlot = function CreateCardSlot({ slot }) {
  return (
    <StyledCardSlot id={slot} onDragOver={allowDrop} onDrop={handleDrop}>
      {slot}
    </StyledCardSlot>
  );
};


export default CardSlot;
