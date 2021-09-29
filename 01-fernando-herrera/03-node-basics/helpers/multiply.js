const colors = require('colors');
const fs = require('fs');

const createFile = async (base = 5, limit = 10, list = false) =>
{
	try
	{
		let output = '', consoleView = '';

		for (let i = 1; i <= limit; i++)
		{
			output += `${ base } x ${ i } = ${ base * i }\n`;
			consoleView += `${ base } ${ colors.gray('x') } ${ i } ${ colors.gray('=') } ${ colors.blue(base * i) }\n`;
		}

		if (list)
		{
			console.log('========================='.green);
			console.log(`*       ${ base }-table         *`.green);
			console.log('========================='.green);
			console.log('');

			console.log(consoleView);
		}

		const basePath = './01-fernando-herrera/03-node-basics/'
		const fileName = `${ basePath }output/table-${ base }.txt`;
		fs.writeFileSync(fileName, output);

		return fileName;
	}
	catch (error)
	{
		throw error;
	}
}

module.exports = {
	createFile: createFile,
}
