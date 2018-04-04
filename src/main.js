import 'core-js/es6/map';
import 'core-js/es6/set';
import initReactFastclick from 'react-fastclick';

initReactFastclick();

const TRACKING_ID = 'UA-57226902-1';

let analytics;
try {
  analytics = gtag;
} catch (e) {
  analytics = () => {};
}

analytics('js', new Date());
analytics('config', TRACKING_ID);

import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';

render(<App />, document.getElementById('root'));
