const express = require('express');
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
app.use((req, res, next) => {
  if (!req.secure && process.env.NODE_ENV === 'production') {
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

const data = require('../dist/data');

app.use('/sitemap.xml', (req, res) => {
  const baseUrl = 'https://www.usful.co';

  res.type('application/xml');

  res.send(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${data.sections
        .map(
          section => `
        <url>
          <loc>${baseUrl}${section.route.path}</loc>
          <lastmod>2017-09-01</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
        ${section.projects
          .map(
            project => `
          <url>
            <loc>${baseUrl}${project.route.path}</loc>
            <lastmod>2017-09-01</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
          </url>
        `
          )
          .join('')}
      `
        )
        .join('')}
    </urlset>`
  );
});

const sendIndex = (req, res) =>
  res.sendFile(path.join(__dirname, '/../public/index.html'));

['/technology', '/experiences', '/market'].forEach(url => {
  app.use(url, sendIndex);
  app.use(`${path}/*`, sendIndex);
});

app.use('/', express.static(__dirname +'/../public'));

http.createServer(app).listen(8080);
console.log('http listening on port 8080!');

/**
const options = {
  key: fs.readFileSync(path.join(__dirname, '/ssl/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '/ssl/cert.pem')),
  ca: fs.readFileSync(path.join(__dirname, './ssl/fullchain.pem'))
};

https.createServer(options, app).listen(9090);
console.log('https listening on port 9090!');

 */