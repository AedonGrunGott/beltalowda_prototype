import React, { useState } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import axios from 'axios';


const StyledButton = styled.button`
  &:hover {
    color: #82af8b;
    transform: scale(1.1);
    background-color: #5e7a61;
  }
  padding: 2px;
  transition: transform 0.2s;
  background-color: grey;
  margin: 8px;
  box-shadow: 2px 2px #22AA44,
             -2px -2px #CCCCCC;
`;

const StyledGoButton = styled.button`
  &:hover {
    color: #f2c71b;
    transform: scale(1.1);
    background-color: #5e7a61;
  }
  padding: 2px;
  transition: transform 0.2s;
  background-color: ${(props) => (props.commited ? 'orange' : 'grey')};
  margin: 8px;
  box-shadow: 2px 2px #22AA44,
             -2px -2px #CCCCCC;
`;

const StyledAdminBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AdminBar = function CreateAdminBar({ commited, setCommited, setCurrentUser, setCurrentView, user }) {


  const [hoverSound] = useSound(
    '/sounds/button_hover.wav',
    { volume: 0.5 },
  );

  const [clickSound] = useSound(
    '/sounds/button_confirm.wav',
    { volume: 0.75 },
  );

  function handleCommit() {
    setCommited(!commited);
    const commitStatus = !commited ? 'COMMITED' : 'BACKING DOWN';
    const message = {
      message: `${user.name} IS ${commitStatus}`,
      sender: 'global',
    };
    window.webSocket.emit('message', JSON.stringify(message));
    clickSound();
  }

  function setView(event) {
    clickSound();
    setCurrentView(Number(event.target.id));
  }

  function handleLogin() {
    const name = prompt('what\'s your name, Commander?');
    const url = `http://${process.env.SERVER_URL}:${process.env.SERVER_PORT}/users`;
    console.log(url);
    axios.get(url)
      .then((response) => {
        const userList = response.data;
        userList.forEach((usr) => {
          if (usr.name === name) {
            console.log('valid user');
            setCurrentUser(usr);
            return;
          }
          alert('unknown user');
        });
      })
      .catch((error) => { console.error(error); });
  }

  return (
    <StyledAdminBar style={{ position: 'relative' }}>
      <div>
        <StyledButton id="0" type="button" onMouseOver={hoverSound} onClick={setView}>GO TO EARTH</StyledButton>
        <StyledButton id="1" type="button" onMouseOver={hoverSound} onClick={setView}>GO TO MARS</StyledButton>
        <StyledButton id="2" type="button" onMouseOver={hoverSound} onClick={setView}>GO TO THE BEHEMOTH</StyledButton>
      </div>
      <div>
        <StyledGoButton commited={commited} onMouseOver={hoverSound} onClick={handleCommit}>COMMIT</StyledGoButton>
        <StyledButton id="login" type="button" onMouseOver={hoverSound} onClick={handleLogin}>LOGIN</StyledButton>
      </div>
    </StyledAdminBar>
  );
};


export default AdminBar;
