import {createRoot} from 'react-dom/client';
import React from 'react';

import AppRoot from './components/AppRoot';


const root = createRoot(document.getElementById('root'));
root.render(
  <AppRoot />
);
