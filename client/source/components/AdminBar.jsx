import React from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';

const StyledButton = styled.button`
  &:hover {
    color: #82af8b;
    transform: scale(1.1);
    background-color: #5e7a61;
  }
  transition: transform 0.2s;
  background-color: grey;
  margin: 8px;
  box-shadow: 2px 2px #22AA44,
             -2px -2px #CCCCCC;
`;

const StyledAdminBar = styled.div`
  display: flex;
  justify-content: center;
`;

const AdminBar = function CreateAdminBar({ setCurrentView }) {
  const [hoverSound] = useSound(
    '/sounds/button_hover.wav',
    { volume: 0.5 },
  );

  const [clickSound] = useSound(
    '/sounds/button_confirm.wav',
    { volume: 0.75 },
  );

  function setView(event) {
    clickSound();
    setCurrentView(Number(event.target.id));
  }

  return (
    <StyledAdminBar style={{ position: 'relative' }}>
      <StyledButton id="0" type="button" onMouseOver={hoverSound} onClick={setView}>GO TO EARTH</StyledButton>
      <StyledButton id="1" type="button" onMouseOver={hoverSound} onClick={setView}>GO TO MARS</StyledButton>
      <StyledButton id="2" type="button" onMouseOver={hoverSound} onClick={setView}>GO TO MEDINA</StyledButton>
    </StyledAdminBar>
  );
};


export default AdminBar;
