import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    console.log('changing viewed planet');
  }, [currentView]);

  return (
    <>
      <Starfield starCount="1000" />
      <Planet planet={planets[currentView]} />
      <Header planet={planets[currentView].name} />
      <OpponentSpace />

      <GameSpace planet={planets[0].name} hide={currentView === 0} id="0" />
      <GameSpace planet={planets[1].name} hide={currentView === 1} id="1" />
      <GameSpace planet={planets[2].name} hide={currentView === 2} id="2" />

      <HandSpace />

      <AdminBar setCurrentView={setCurrentView} />
    </>
  );
};


export default AppRoot;
