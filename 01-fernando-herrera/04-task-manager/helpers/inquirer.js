require('colors');
const inquirer = require('inquirer');

const questions = [
	{
		type: 'list',
		name: 'option',
		message: 'What you want to do?',
		choices: [
			{
				value: '1',
				name: `${ '1.'.green } Create task`,
			},
			{
				value: '2',
				name: `${ '2.'.green } Show all tasks`,
			},
			{
				value: '3',
				name: `${ '3.'.green } Show completed tasks`,
			},
			{
				value: '4',
				name: `${ '4.'.green } Show uncompleted tasks`,
			},
			{
				value: '5',
				name: `${ '5.'.green } Complete task(s)`,
			},
			{
				value: '6',
				name: `${ '6.'.green } Delete task`,
			},
			{
				value: '0',
				name: `${ '0.'.green } Exit`,
			},
		],
	}
];

const pauseQuestions = [
	{
		type: 'input',
		name: 'enter',
		message: `Press ${ 'ENTER'.green } to continue`,
	}
]

const inquirerMenu = async () =>
{
	console.clear();

	console.log('===================================='.green);
	console.log('          Select an option          '.white);
	console.log('===================================='.green);
	console.log('\n');

	const { option } = await inquirer.prompt(questions);

	return option;
};

const pause = async () =>
{
	console.log('\n');
	await inquirer.prompt(pauseQuestions);
};

const readInput = async ( message ) =>
{
	const question = [
		{
			type: 'input',
			name: 'description',
			message,
			validate (value)
			{
				if (value.length === 0)
				{
					return 'Please, insert a value.';
				}
				else
				{
					return true;
				}
			}
		}
	];

	const { description } = await inquirer.prompt(question);

	return description;
};

const taskToDeleteList = async (tasks = []) =>
{
	const choices = tasks.map( (task, index) => (
		{
			value: task.id,
			name: `${ ((index + 1) + '.').green } ${ task.description }`,
		}
	));

	choices.unshift({
		value: '0',
		name: `${ '0.'.green} Cancel`,
	});

	const question = [
		{
			type: 'list',
			name: 'id',
			message: 'Delete',
			choices,
		}
	];

	const { id } = await inquirer.prompt(question);

	return id;
};

const confirm = async ( message ) =>
{
	const question = [
		{
			type: 'confirm',
			name: 'ok',
			message,
		}
	];

	const { ok } = await inquirer.prompt(question);

	return ok;
};

const showCheckList = async (tasks = []) =>
{
	const choices = tasks.map( (task, index) => (
		{
			value: task.id,
			name: `${ ((index + 1) + '.').green } ${ task.description }`,
			checked: task.completedDate ? true : false,
		}
	));

	const question = [
		{
			type: 'checkbox',
			name: 'ids',
			message: 'Delete',
			choices,
		}
	];

	const { ids } = await inquirer.prompt(question);

	return ids;
};

module.exports = {
	inquirerMenu,
	pause,
	readInput,
	taskToDeleteList,
	confirm,
	showCheckList,
}
