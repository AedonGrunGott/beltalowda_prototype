import React from 'react';

import GameSpace from './GameSpace';
import Header from './Header';
import Starfield from './Starfield';


const AppRoot = function CreateAppRoot() {
  return (
    <>
      <Starfield starCount="1000" />
      <Header />
      <GameSpace />
    </>
  );
};


export default AppRoot;
