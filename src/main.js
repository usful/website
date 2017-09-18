import 'core-js/es6/map';
import 'core-js/es6/set';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App/index';

render(
  <BrowserRouter ref={router => (window.router = router || window.router)}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
