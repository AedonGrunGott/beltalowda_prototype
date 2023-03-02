import { createRoot } from 'react-dom/client';
import React from 'react';

import AppRoot from './components/AppRoot';


console.log('SERVED AT', process.env.SERVER_URL);

const root = createRoot(document.getElementById('root'));
root.render(
  <AppRoot />,
);
