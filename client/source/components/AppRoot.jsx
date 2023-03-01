import React, { useState } from 'react';

import AdminBar from './AdminBar';
import GameSpace from './GameSpace';
import HandSpace from './HandSpace';
import Header from './Header';
import OpponentSpace from './OpponentSpace';
import Planet from './Planet';
import Starfield from './Starfield';

const planets = [
  { name: 'Earth Orbit', url: '/images/earth_orbit.png' },
  { name: 'Mars Orbit', url: '/images/mars_orbit.png' },
  { name: 'Medina Station', url: '/images/medina_station.png' },
];

const AppRoot = function CreateAppRoot() {
  const [currentView, setCurrentView] = useState(0);
  return (
    <>
      <Starfield starCount="1000" />
      <Planet planet={planets[currentView]} />
      <Header />
      <OpponentSpace />
      <GameSpace />
      <HandSpace />

      <AdminBar setCurrentView={setCurrentView} />
    </>
  );
};


export default AppRoot;
