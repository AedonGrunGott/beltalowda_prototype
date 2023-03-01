import React from 'react';

import Earth from './Earth';
import GameSpace from './GameSpace';
import HandSpace from './HandSpace';
import Header from './Header';
import OpponentSpace from './OpponentSpace';
import Starfield from './Starfield';


const AppRoot = function CreateAppRoot() {
  return (
    <>
      <Starfield starCount="1000" />
      <Earth />
      <Header />
      <OpponentSpace />
      <GameSpace />
      <HandSpace />
    </>
  );
};


export default AppRoot;
