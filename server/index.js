const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const next = require('next');

// const dev = process.env.NODE_ENV || 'development';
const app = next({});

const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = express();
		const port = 5001;

		server.use(morgan('dev'));
		server.use(helmet());

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(port, err => {
			if (err) throw err;
			console.log(`< listening on port ${port}`);
		});
	})
	.catch(err => {
		console.error(err.stack);
		process.exit(1);
	});
