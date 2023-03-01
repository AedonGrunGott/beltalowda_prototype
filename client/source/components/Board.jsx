import React from 'react';

import GameSpace from './GameSpace';
import HandSpace from './HandSpace';

const Board = function CreateBoard() {
  return (
    <>
      <GameSpace />
      <HandSpace />
    </>
  );
};


export default Board;
