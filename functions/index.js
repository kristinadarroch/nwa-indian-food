const functions = require('firebase-functions');

const express = require('express');
const app = express();

app.set('views', './views')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index.ejs'));

exports.app = functions.https.onRequest(app);
