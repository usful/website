import express from 'express';
import webpack from 'webpack';
import render from '../dist/App';
import template from './template';

const server = express();
server.use('/fonts', express.static('public/fonts'));
server.use('/img', express.static('public/img'));
server.use('/vids', express.static('public/vids'));
server.use('/js', express.static('public/js'));
server.use('/css', express.static('public/css'));

server.get('*', (req, res) => {
  const appString = render({ req, res });

  res.send(template({
    body: appString
  }));
});

server.listen(8080);
