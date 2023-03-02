import React from 'react';


const Header = function CreateHeader({ planet }) {
  return (
    <div style={{
      position: 'relative',
      fontSize: '2rem',
      fontFamily: '"Press Start 2P"',
      padding: '10px',
    }}
    >
      <center><p style={{ color: '#107e57', marginTop: '0' }}>{planet}</p></center>
    </div>
  );
};


export default Header;
