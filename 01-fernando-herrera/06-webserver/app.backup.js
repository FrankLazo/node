const http = require('http');

http.createServer((request, response) => {
	response.write('Hello world!');

	// const person = {
	// 	id: 1,
	// 	name: 'Frank',
	// };
	// response.writeHead(200, { 'Content-Type': 'application/json' });
	// response.write( JSON.stringify(person) );

	// response.setHeader('Content-Disposition', 'attachment; filename=list.csv');
	// response.writeHead(200, { 'Content-Type': 'application/csv' });
	// response.write('id, nombre\n');
	// response.write('1, Fernando\n');
	// response.write('2, Maria\n');
	// response.write('3, Juan\n');
	// response.write('4, Pedro\n');

	response.end();
})
.listen( 8080 );

console.log('Listening port', 8080);
