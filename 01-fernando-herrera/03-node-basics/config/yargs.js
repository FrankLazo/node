// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

const argv = require('yargs')
	.option('b', {
		alias: 'base',
		type: 'number',
		demandOption: true,
		describe: 'Base of multiplication table'
	})
	.option('l', {
		alias: 'list',
		type: 'boolean',
		default: false,
		describe: 'Show table in console'
	})
	.option('u', {
		alias: 'until',
		type: 'number',
		default: 10,
		describe: 'Limit from multiplication table'
	})
	.check((argv, options) => {
		if (isNaN(argv.b))
		{
			throw 'Should be a number';
		}

		return true;
	})
	.argv;

module.exports = {
	argv,
}
