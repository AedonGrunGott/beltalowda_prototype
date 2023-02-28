import React from 'react';

import GameCard from './GameCard';


const GameSpace = function CreateGameSpace() {
  return (
    <div style={{ position: 'relative', color: 'white', border: '1px solid red' }}>
      GAME SPACE
      <GameCard />
    </div>
  );
};

export default GameSpace;
