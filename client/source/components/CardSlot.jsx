import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';


const StyledCardSlot = styled.div`
  background-color: ${(props) => (props.isHovered ? 'green' : null)};
  border: 1px dashed green;
  width: 250px;
  height: 150px;
  margin: 2px;
`;

const CardSlot = function CreateCardSlot({ slot }) {
  const [cards, setCards] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

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
    setIsHovered(false);
  }

  function handleDragOver(event) {
    event.preventDefault();
    console.log('hovering slot');
  }

  function handleDragEnter(event) {
    console.log('hover enter');
    setIsHovered(true);
  }

  function handleDragLeave(event) {
    console.log('hover leave');
    setIsHovered(false);
  }

  useEffect(() => {
    console.log('render cardslot');
  }, [isHovered]);

  return (
    <StyledCardSlot
      id={slot}
      isHovered={isHovered}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    />
  );
};


export default CardSlot;
