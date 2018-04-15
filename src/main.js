import 'core-js/es6/map';
import 'core-js/es6/set';

const TRACKING_ID = 'UA-57226902-1';

if (typeof(window.gtag) === 'undefined') {
  window.analytics = () => {};
} else {
  window.analytics = gtag;
}

window.analytics('js', new Date());
window.analytics('config', TRACKING_ID);

import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';

render(<App />, document.getElementById('root'));
