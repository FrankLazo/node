require('colors');

// const { showMenu, pause } = require('./helpers/messages');
const {
	inquirerMenu,
	pause,
	readInput,
	taskToDeleteList,
	confirm,
	showCheckList,
} = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

console.clear();

const main = async () =>
{
	let option = '';
	const tasks = new Tasks();
	const dbTasks = readDB();

	if (dbTasks)
	{
		tasks.loadTasksFromFile(dbTasks);
	}

	do
	{
		// option = await showMenu();
		option = await inquirerMenu();

		switch (option)
		{
			case '1':
				const description = await readInput('Description:');
				tasks.createTask(description);
				break;

			case '2':
				tasks.fullList();
				break;

			case '3':
				tasks.listDoneOrInQueue();
				break;

			case '4':
				tasks.listDoneOrInQueue(false);
				break;

			case '5':
				const ids = await showCheckList(tasks.arrayList);
				tasks.togglesCompletedOnes(ids);
				break;

			case '6':
				const id = await taskToDeleteList(tasks.arrayList);

				if (id !== '0')
				{
					const ok = await confirm('Confirm your action');

					if (ok)
					{
						tasks.deleteTask(id);
						console.log('\nTask deleted!');
					}
				}

				break;
		}

		saveDB( tasks.arrayList );

		if (option !== '0')
		{
			await pause();
		}
	}
	while (option !== '0');
}

main();
