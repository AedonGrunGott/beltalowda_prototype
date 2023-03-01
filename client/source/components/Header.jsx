import React from 'react';


const Header = function CreateHeader({ planet }) {
  return (
    <div style={{
      position: 'relative',
      fontSize: '2rem',
      fontFamily: '"Press Start 2P"',
    }}
    >
      <p style={{ color: '#a1ce3f', marginTop: '0' }}>BELTALOWDA - A SPACEY GAME</p>
      <p style={{ color: '#107e57', marginTop: '0' }}>{planet}</p>
    </div>
  );
};


export default Header;
