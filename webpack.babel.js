const webpack = require('webpack');
const path = require('path');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'App',
  entry: {
    // Entry to your app
    main: [path.resolve('src', 'main-babel.js')]
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'dist'),
    filename: 'App.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  target: 'node',
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        // scss styles are loaded with modules local scope
        test: /\.scss$/,
        loader: 'null-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false,
      window: {
        navigator: { userAgent: JSON.stringify('test') },
        location: { pathname: JSON.stringify('/') }
      },
      document: {},
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        except: ['webpackJsonp'],
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),

    // Injects the manifest that keeps track
    // of modules registry (saves an HTTP request)
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest'
    })
  ]
};
