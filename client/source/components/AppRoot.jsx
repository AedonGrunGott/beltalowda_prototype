import React from 'react';

import Starfield from './Starfield';


const AppRoot = function CreateAppRoot() {
  return (
    <div>
      <Starfield />
      <div style={{
        color: 'white',
        position: 'relative',
        fontSize: '4rem',
        fontFamily: '"Press Start 2P"',
      }}
      >
        BELTALOWDA
      </div>
    </div>
  );
};


export default AppRoot;
