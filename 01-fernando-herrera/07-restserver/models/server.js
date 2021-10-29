const express = require('express');
const cors = require('cors');

class Server
{
	constructor()
	{
		this.app = express();
		this.port = process.env.PORT;
		this.basePath = './01-fernando-herrera/07-restserver';
		this.usersPath = '/api/users';

		// Middlewares
		this.middlewares();

		// Rutas de la app
		this.routes();
	}

	middlewares()
	{
		// CORS
		this.app.use( cors() );

		// Reading and parsing body
		this.app.use( express.json() );

		// Directorio público
		this.app.use( express.static(`${ this.basePath }/public`) );
	}

	routes()
	{
		this.app.use(this.usersPath, require('../routes/users'));
	}

	listen()
	{
		this.app.listen(this.port, () => {
			console.log(`Example app listening at http://localhost:${ this.port }`)
		});
	}
}

module.exports = Server;
