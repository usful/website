/* eslint import/no-extraneous-dependencies: 0 */
/* eslint global-require: 0 */
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const path = require('path');
const compression = require('compression');
const http = require('http');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const aws = require('aws-sdk');

const app = express();

app.use(bodyParser.json());
app.use(compression());

/**
 * Re-enable to force SSL connection.
 */

/**
app.use((req, res, next) => {
  if (!req.secure) {
    res.writeHead(301, {
      Location: `https://${req.headers['host']}${req.url}`
    });

    res.end();
  }

  next();
});
*/

// put in the actual config here.
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
});

const transporter = nodemailer.createTransport({
  SES: new aws.SES({ apiVersion: '2010-12-01' })
});

app.post('/api/contact-us', async (req, res) => {
  const message = {
    from: process.env.AWS_EMAIL,
    to: process.env.AWS_EMAIL,
    subject: 'Contact Us Message',
    text: `
From: ${req.body.email},
Subject: ${req.body.subject},
Message: ${req.body.message}`
  };

  const response = await new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(info);
    });
  });

  res.send(response);
  res.end();
});

const compiler = webpack(require('../webpack.config')());

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/', // Same as `output.publicPath` in most cases.
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    }
  })
);

const sendIndex = (req, res) =>
  res.sendFile(path.join(__dirname + '/../public/index.html'));

['/technology', '/experiences', '/market'].forEach(url => {
  app.use(url, sendIndex);
  app.use(`${path}/*`, sendIndex);
});

app.use('/', express.static('public'));

http.createServer(app).listen(8080);
console.log('http listening on port 8080!');

/**
 * You can enable this to test SSL
 */

/**
const options = {
  key: fs.readFileSync(path.join(__dirname, '../prod-server/ssl/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../prod-server/ssl/cert.pem')),
  ca: fs.readFileSync(path.join(__dirname, '../prod-server/ssl/fullchain.pem'))
};

https.createServer(options, app).listen(9090);
console.log('https listening on port 9090!');
**/