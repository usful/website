const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['whatwg-fetch', 'babel-polyfill', path.resolve(__dirname, 'src/main.js')],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index_bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/(?!models)/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        // scss styles are loaded with modules local scope
        test: /\.scss$/,
        loader: 'style-loader!css-loader?modules&localIdentName=' +
        '[local]---[hash:base64:5]!sass-loader!postcss-loader',
      },
    ],
  },
  plugins: [
  ],
  devtool: 'source-map',
  watch: true,
};
