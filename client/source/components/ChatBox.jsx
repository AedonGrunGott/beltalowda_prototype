import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import io from 'socket.io-client';

const StyledChatBox = styled.div`
  position: absolute;
  background-color: RGBA(40,40,40,0.5);
  top: 20px;
  left: 20px;
  width: 220px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-end;
  color: white;
  font-family: 'Press Start 2P';
  font-size: 0.75rem;
  padding: 2px;
`;

const StyledMessage = styled.p`
  color: ${(props) => ((props.sender === 'global') ? 'green' : 'white')};
  margin: 2px 2px;
  width: 210px;
  word-wrap: break-word;
  text-shadow: 1px 1px RGBA(120,120,120, 1.0);
`;

const ChatBox = function CreateChatBox({ user }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    window.webSocket.emit('message', JSON.stringify({ message: input, sender: user.name }));
    setInput('');
  }

  useEffect(() => {
    window.webSocket.on('message', (msg) => {
      console.log('chat got', msg);
      setMessages((previous) => [...previous, JSON.parse(msg)]);
    });

    return (() => { window.webSocket.off('message'); });
  }, []);

  useEffect(() => {
    console.log('messages is', messages);
  }, [messages]);

  return (
    <StyledChatBox>
      <div style={{ listStyle: 'none' }}>
        {messages.map((message, index) => {
          return (
            <div style={{ margin: '6px 0' }}>
              <StyledMessage sender={message.sender} key={message + index}>{`[${message.sender}]`}</StyledMessage>
              <StyledMessage sender={message.sender} key={message + index}>{`>> ${message.message}`}</StyledMessage>
            </div>
          )
        })}
      </div>
      <form style={{ border: '2px solid RGBA(30,30,30,0.75)', margin: '20px 0 0 10px' }} onSubmit={handleSubmit}>
        <input style={{ width: '100%' }} value={input} type="text" placeholder="message..." onChange={(event) => setInput(event.target.value)} />
      </form>
    </StyledChatBox>
  );
};


export default ChatBox;
