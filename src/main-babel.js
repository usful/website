import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export default function render({ req }) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );
}
