const { createFile } = require('./helpers/multiply');
const { argv } = require('./config/yargs');

require('colors');

// console.clear();
console.log('\033[2J');

createFile(argv.base, argv.until, argv.list)
	.then(file => console.log(file.rainbow, 'created!'))
	.catch(err => console.error(err));
