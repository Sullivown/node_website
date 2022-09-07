const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
	let pageData;
	let code;

	if (req.url === '/favicon.ico') {
		return;
	} else if (req.url === '/') {
		pageData = fs.readFileSync('./pages/index.html', function (err, html) {
			if (err) {
				throw err;
			}
		});
		code = 200;
	} else if (req.url === '/about' || req.url === '/contact-me') {
		pageData = fs.readFileSync(
			`./pages/${req.url}.html`,
			function (err, html) {
				if (err) {
					throw err;
				}
			}
		);
		code = 200;
	} else {
		pageData = fs.readFileSync(`./pages/404.html`, function (err, html) {
			if (err) {
				throw err;
			}
		});
		code = 404;
	}
	res.statusCode = code;
	res.setHeader('Content-Type', 'text/html');
	res.end(pageData);
});

server.listen(port, () => {
	console.log(`Server running at port ${port}`);
});
