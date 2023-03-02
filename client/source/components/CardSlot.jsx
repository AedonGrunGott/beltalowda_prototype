import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';


const StyledCardSlot = styled.div`
  background-color: ${(props) => (props.isHovered ? 'RGBA(20,160,30,0.75)' : props.color)};
  border: 1px dashed ${(props) => props.color};
  border-radius: 0.5rem;
  width: 250px;
  height: 150px;
  margin: 4px 10px;
`;

const CardSlot = function CreateCardSlot({ color, drag, slot }) {
  const [cards, setCards] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const [clickSound] = useSound(
    '/sounds/card_touch.wav',
    { volume: 1.0 },
  );

  function handleDrop(event) {
    if (!drag) { return; }
    event.preventDefault();
    const data = event.dataTransfer.getData('card', event.target.id);
    console.log('dropping', data, 'into', event.target.id, cards);
    try {
      event.target.appendChild(document.getElementById(data));
    } catch (error) {
      console.error(error);
    }
    clickSound();
    setIsHovered(false);
  }

  function handleDragOver(event) {
    if (!drag) { return; }
    event.preventDefault();
    console.log('hovering slot');
  }

  function handleDragEnter(event) {
    if (!drag) { return; }
    console.log('hover enter');
    setIsHovered(true);
  }

  function handleDragLeave(event) {
    if (!drag) { return; }
    console.log('hover leave');
    setIsHovered(false);
  }

  useEffect(() => {
    console.log('render cardslot');
  }, [isHovered]);

  return (
    <StyledCardSlot
      id={slot}
      color={color}
      isHovered={isHovered}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    />
  );
};


export default CardSlot;
