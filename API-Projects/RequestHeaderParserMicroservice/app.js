const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname,'templates'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	res.render('index',{ url: fullUrl});
});

app.get('/api/whoami', (req,res) => {
	const reqip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	const ip = reqip.split(',')[0];

	const response = {
		ipaddress: ip,
		language: req.headers['accept-language'],
		software: req.headers['user-agent']
	}

	res.writeHead(200, {"Content-Type": "application/json"});
	res.end(JSON.stringify(response));
});

app.listen(3000, () => console.log("Server is listening at http://localhost:3000"));

