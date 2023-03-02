import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';


const StyledPlayer = styled.div`
  position: absolute;
  color: white;
  font-size: 2rem;
  top: 20px;
  right: 20px;
`;

const StyledButton = styled.button`
  &:hover {
    transform: scale(1.1);
  }
  transition: transform 0.2s;
`;

const MusicPlayer = function CreateMusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const music = useRef(new Audio('/sounds/me_map_theme.mp3'));

  const [hoverSound] = useSound(
    '/sounds/button_hover.wav',
    { volume: 0.5 },
  );

  const [clickSound] = useSound(
    '/sounds/button_confirm.wav',
    { volume: 0.75 },
  );

  function handleClick() {
    if (playing) {
      music.current.play();
    } else {
      music.current.pause();
    }
    setPlaying(!playing);
    clickSound();
  }

  useEffect(() => {
    music.current.volume = (volume / 100);
  }, [volume]);

  return (
    <StyledPlayer>
      <StyledButton type="button" onMouseOver={hoverSound} onClick={handleClick}>
        {(playing) ? '▶️' : '⏸️'}
      </StyledButton>
      <input value={volume} type="range" min="0" max="100" onChange={(event) => { setVolume(event.target.value); }} />
    </StyledPlayer>
  );
};

export default MusicPlayer;
