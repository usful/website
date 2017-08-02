/* eslint import/no-extraneous-dependencies: 0 */
/* eslint global-require: 0 */
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const path = require('path');

const app = express();

  const compiler = webpack(require('../webpack.config')());
  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/', // Same as `output.publicPath` in most cases.
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    }
  }));

  app.use('/technology', (req, res) => res.sendFile(path.join(__dirname + '/../public/index.html')));
  app.use('/technology/*', (req, res) => res.sendFile(path.join(__dirname + '/../public/index.html')));
  app.use('/experiences', (req, res) => res.sendFile(path.join(__dirname + '/../public/index.html')));
  app.use('/experiences/*', (req, res) => res.sendFile(path.join(__dirname + '/../public/index.html')));
  app.use('/', express.static('public'));

app.listen(8080, () => console.log('Listening on port 8080!'));
