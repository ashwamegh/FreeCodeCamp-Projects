const express = require('express');
const path = require('path');
const mongodb = require('mongodb').MongoClient;
const dotenv = require('dotenv');

dotenv.load();
const url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds123695.mlab.com:23695/url-shortener`
const app = express();
let db, collection;

mongodb.connect(url, (err, database) => {
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		db = database;
		collection = database.collection('urls');
		app.listen(3000, () => console.log("Server is listening at http://localhost:3000"));
	}
});

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	res.render('index', { url: fullUrl });
});

app.get('/new/*', (req, res) => {
	let docCount;
	collection.find().toArray((err, doc) => console.log(doc));
	collection.find().count({}, (err, count) => docCount = count + 1);
	collection.insert({
		original_url: req.params[0],
		shorten_id: docCount
	}, (err, data) => {
		res.end(JSON.stringify({
			original_url: req.params[0]
		}))
	});

	db.close();
});


