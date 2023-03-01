import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';


const StyledCardSlot = styled.div`
  border: 1px dashed green;
  width: 150px;
  height: 250px;
  margin: 2px;
`;

const CardSlot = function CreateCardSlot({ slot }) {
  const [cards, setCards] = useState([]);

  const [clickSound] = useSound(
    '/sounds/card_touch.wav',
    { volume: 1.0 },
  );

  function handleDrop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('card', event.target.id);
    try {
      event.target.appendChild(document.getElementById(data));
    } catch (error) {
      console.error(error);
    }
    clickSound();
  }

  function handleDragOver(event) {
    event.preventDefault();
    console.log('hover slot');
  }

  useEffect(() => {
    console.log('render cardslot');
  });

  return (
    <StyledCardSlot id={slot} onDragOver={handleDragOver} onDrop={handleDrop} />
  );
};


export default CardSlot;
