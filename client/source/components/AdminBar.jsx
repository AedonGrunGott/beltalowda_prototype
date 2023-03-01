import React from 'react';


const AdminBar = function CreateAdminBar({ setCurrentView }) {
  function setView(event) {
    setCurrentView(event.target.id);
  }


  return (
    <div style={{ position: 'relative' }}>
      <button id="0" type="button" onClick={setView}>GO TO EARTH</button>
      <button id="1" type="button" onClick={setView}>GO TO MARS</button>
      <button id="2" type="button" onClick={setView}>GO TO MEDINA</button>
    </div>
  )
};


export default AdminBar;
