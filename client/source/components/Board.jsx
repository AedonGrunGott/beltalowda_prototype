import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';

import GameSpace from './GameSpace';
import HandSpace from './HandSpace';

const Board = function CreateBoard() {
  const [parent, setParent] = useState(null);

  function handleDragEnd(event) {
    console.log('drag end', event, event.over);
    setParent();
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <GameSpace />
      <HandSpace />
    </DndContext>
  );
};


export default Board;
