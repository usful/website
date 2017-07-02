/* eslint import/no-extraneous-dependencies: 0 */
/* eslint global-require: 0 */
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');

const app = express();

  const compiler = webpack(require('../webpack.config')());
  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/', // Same as `output.publicPath` in most cases.
  }));

app.use('/', express.static('public'));

app.listen(8080, () => console.log('Listening on port 8080!'));
