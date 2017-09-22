const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: [path.resolve('src', 'data/index.js')]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'data.js',
    library: 'data.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: [],
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  plugins: []
};
