import React, { useEffect, useState } from 'react';

import AdminBar from './AdminBar';
import ChatBox from './ChatBox';
import GameSpace from './GameSpace';
import HandSpace from './HandSpace';
import Header from './Header';
import MusicPlayer from './MusicPlayer';
import OpponentSpace from './OpponentSpace';
import Planet from './Planet';
import Starfield from './Starfield';

const planets = [
  { name: 'Earth Orbit', url: '/images/earth_orbit.png' },
  { name: 'Mars Orbit', url: '/images/mars_orbit.png' },
  { name: 'The Behemoth', url: '/images/medina_station.png' },
];

const defaultUser = {
  name: 'unknown-signal',
  level: 0,
  faction: 'un',
};

const cardData = [
  { name: 'Razorback', color: 'RGBA(60,100,200,0.75)', level: 0, url: 'https://static.wikia.nocookie.net/expanse/images/1/1a/Razorback.jpg' },
  { name: 'Rocinante', color: 'RGBA(88, 149, 90, 0.75)', level: 0, url: 'https://static.wikia.nocookie.net/expanse/images/5/54/RociArtS4.png' },
  { name: 'Tynan', color: 'RGBA(120, 120, 120, 0.75)', level: 1, url: 'https://static.wikia.nocookie.net/expanse/images/1/16/Tynan_.png' },
  { name: 'Agatha King', color: 'RGBA(60, 100, 200, 0.75)', level: 2, url: 'https://static.wikia.nocookie.net/expanse/images/d/d3/Truman_NorthFront.png' },
  { name: 'Donnager', color: 'RGBA(220,120,80,0.75)', level: 3, url: 'https://static.wikia.nocookie.net/expanse/images/8/8b/MCRN_Donnager_Render.jpg' },
];

const AppRoot = function CreateAppRoot() {
  const [currentView, setCurrentView] = useState(0);
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const [commited, setCommited] = useState(false);

  useEffect(() => {
    console.log('changing viewed planet');
  }, [currentView]);

  return (
    <>
      <Starfield starCount="1000" />
      <Planet planet={planets[currentView]} />
      <Header planet={planets[currentView].name} />

      <div>
        <OpponentSpace planet={planets[0].name} hide={currentView === 0} id="o0" />
        <OpponentSpace planet={planets[1].name} hide={currentView === 1} id="o1" />
        <OpponentSpace planet={planets[2].name} hide={currentView === 2} id="o2" />

        <GameSpace planet={planets[0].name} hide={currentView === 0} id="p0" />
        <GameSpace planet={planets[1].name} hide={currentView === 1} id="p1" />
        <GameSpace planet={planets[2].name} hide={currentView === 2} id="p2" />
        <AdminBar setCurrentUser={setCurrentUser} commited={commited} setCommited={setCommited} user={currentUser} setCurrentView={setCurrentView} />
        <HandSpace user={currentUser} cardData={cardData} commited={commited} />
      </div>

      <ChatBox user={currentUser} />
      <MusicPlayer />
    </>
  );
};


export default AppRoot;
