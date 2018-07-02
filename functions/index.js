const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const app = express();

const fb = firebase.initializeApp(
  functions.config().firebase
);

app.set('views', './views')
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    getReviews().then(reviews => {
      res.render('pages/index.ejs', {reviews: reviews})
    });
  });


function getReviews() {
  const ref = fb.database().ref('reviews');
  return ref.once('value').then(snap => snap.val());
}

exports.app = functions.https.onRequest(app);
