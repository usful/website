import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import HomePage from './Pages/HomePage';

const App = () => {
  return <HomePage/>;
};

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
