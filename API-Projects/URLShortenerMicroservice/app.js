const express = require('express');
const path = require('path');
const mongodb = require('mongodb').MongoClient;
const shortid = require('shortid');
const dotenv = require('dotenv');
const validUrl = require('valid-url');

dotenv.load();
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

const url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds123695.mlab.com:23695/url-shortener`
const app = express();
let db, collection;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');


mongodb.connect(url, (err, database) => {
  const errorMessage = JSON.stringify({
    errorCode: '500',
    message: "Encountered Server Error. Please refrewsh!"
  });

  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    db = database;
    collection = database.collection('urls');
    app.listen(3000, () => console.log("Server is listening at http://localhost:3000"));

    // Root route starts
    app.get('/', (req, res) => {
      const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      res.render('index', { url: fullUrl });
    });

    // Route for new url starts here
    app.get('/new/*', (req, res) => {
      if (validUrl.isUri(req.params[0])) {
        let docCount = shortid.generate();
        const hostUrl = req.protocol + '://' + req.get('host');
        const shortUrl = hostUrl + '/u/' + docCount;

        collection.insert({
          original_url: req.params[0],
          shorten_url: shortUrl
        }, (err, data) => {
          res.end(JSON.stringify({
            original_url: req.params[0],
            shorten_url: shortUrl
          }))
        });
      }
      else {
        res.end(JSON.stringify({
          error: "Wrong url format, make sure you have a valid protocol and real site."
        }));
      }
    });

    // Route to redirect starts here

    app.get('/u/:shorturl', (req, res) => {
      const hostUrl = req.protocol + '://' + req.get('host');
      const shortUrl = hostUrl + '/u/' + req.params.shorturl;
      collection.find({ shorten_url: shortUrl }).toArray((err, doc) => {
        console.log(doc);
        if (err) {
          res.sendStatus(500);
          res.end(errorMessage);
        }
        else {

          if (doc === undefined) {
            res.sendStatus(500);
            res.end(errorMessage);
          }
          else {
            res.redirect(doc[0].original_url);
          }

        }
      })
    });

  }
});