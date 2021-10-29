const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const basePath = './01-fernando-herrera/06-webserver';

// Handlebars
app.set('view engine', 'hbs');
app.set('views', basePath + '/views');
hbs.registerPartials( __dirname + '/views/partials' );

// Servir contenido estático
app.use( express.static(`${ basePath }/public`) );

// Con public-template

// app.get('/generic', (req, res) => {
// 	res.sendFile(`${ __dirname }/public/generic.html`);
// });

// app.get('/elements', (req, res) => {
// 	res.sendFile(`${ __dirname }/public/elements.html`);
// });

// Con public-old

// app.get('*', (req, res) => {
// 	res.sendFile(`${ __dirname }/public/not_found.html`);
// });

// Con hbs

app.get('/', (req, res) => {
	res.render('home', {
		name: 'Frank Lazo',
		title: 'Curso de Node',
	});
});

app.get('/generic', (req, res) => {
	res.render('generic', {
		name: 'Frank Lazo',
		title: 'Curso de Node',
	});
});

app.get('/elements', (req, res) => {
	res.render('elements', {
		name: 'Frank Lazo',
		title: 'Curso de Node',
	});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${ port }`)
});
