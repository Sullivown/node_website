const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'pages/index.html'));
});

app.get('/about', function (req, res) {
	res.sendFile(path.join(__dirname, 'pages/about.html'));
});

app.get('/contact-me', function (req, res) {
	res.sendFile(path.join(__dirname, 'pages/contact-me.html'));
});

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, 'pages/404.html'));
});

app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});
