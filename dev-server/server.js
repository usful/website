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

app.use((req, res, next) => {
  if (!req.secure) {
    res.writeHead(301, {
      Location: `https://${req.headers['host']}${req.url}`
    });

    res.end();
  }

  next();
});

app.post('/api/contact-us', async (req, res) => {

  module.exports = class EmailTransport extends Transport {
    constructor(config) {
      super(config);

      // put in the actual config here.
      aws.config.update({
        accessKeyId: config.transports.email.AWSAccessKeyID,
        secretAccessKey: config.transports.email.AWSSecretKey,
        region: config.transports.email.region,
      });

      this.transporter = nodemailer.createTransport({
        SES: new aws.SES({ apiVersion: '2010-12-01' })
      });
    }

    /**
     * Wrap the nodemailer sendMail in a promise to allow async/await
     * @param mailOptions
     * @returns {Promise}
     */
    sendMail(mailOptions) {
      return new Promise((resolve, reject) => {
        // send mail with defined transport object
        this.transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(info);
        });
      });
    }

    async send({ user, message }) {
      await this.sendMail({
        from: this.config.transports.email.from,
        to: user.email,
        subject: message.subject,
        text: message.text,
        html: message.html
      });
    }
  };

  res.send({success: true});
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

const options = {
  key: fs.readFileSync(path.join(__dirname, '../prod-server/ssl/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../prod-server/ssl/cert.pem')),
  ca: fs.readFileSync(path.join(__dirname, '../prod-server/ssl/fullchain.pem'))
};

https.createServer(options, app).listen(9090);
console.log('https listening on port 9090!');