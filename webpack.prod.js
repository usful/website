const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    'whatwg-fetch',
    'babel-polyfill',
    path.resolve(__dirname, 'src/main.js')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: absPath => /models/.test(absPath) || /website/.test(absPath),
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ]
      },
      {
        // scss styles are loaded with modules local scope
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                './node_modules/lane-components/style',
                './src/style'
              ]
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: []
};
