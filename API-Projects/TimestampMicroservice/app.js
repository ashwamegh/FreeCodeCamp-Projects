const express = require('express');
const path = require('path');
const moment = require('moment');
const chrono = require('chrono-node');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname,'templates'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	res.render('index',{ url: fullUrl});
});

app.get('/:date', (req, res) => {
	const unformattedDate = req.params.date;
	res.writeHead(200, { 'Content-Type': 'application/json'});

	if(unformattedDate.match(/[a-z]/ig)){
		const parsedDateString = chrono.parseDate(req.params.date);

		if((new Date(parsedDateString)).getTime() > 0){
			const formattedDate = {
				unixtime: Date.parse(parsedDateString),
				natural: moment(parsedDateString).format("MMM Do YYYY")
			}
			res.end(JSON.stringify(formattedDate));
		}
		else {
			res.end(JSON.stringify({
				unixtime: null,
				natural: null
			}));
		}
	}
	else {
		if(Number(unformattedDate) > 0){
			const formattedDate = {
				unixtime: unformattedDate,
				natural: moment.unix(unformattedDate).format("MMM Do YYYY")
			}
			res.end(JSON.stringify(formattedDate));
		}
		else {
			res.end(JSON.stringify({
				unixtime: null,
				natural: null
			}));
		}
	}
});

app.listen(3000);

