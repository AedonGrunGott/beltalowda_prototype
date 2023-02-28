import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GameSpace from './GameSpace';
import HandSpace from './HandSpace';
import Header from './Header';
import Starfield from './Starfield';


const AppRoot = function CreateAppRoot() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Starfield starCount="1000" />
      <Header />
      <GameSpace />
      <HandSpace />
    </DndProvider>
  );
};


export default AppRoot;
