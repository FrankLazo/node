const workers =
[
	{
		id: 1,
		name: 'Frank',
	},
	{
		id: 2,
		name: 'Cinthia',
	},
	{
		id: 3,
		name: 'Azucena',
	},
];

const salaries =
[
	{
		id: 1,
		salary: 1000,
	},
	{
		id: 2,
		salary: 1500,
	},
];

const getWorker = ( id, callback ) =>
{
	const worker = workers.find(wkr => wkr.id === id)?.name;
	return worker ? callback(null, worker) : callback(`The worker with id ${ id } do not exist.`);
};

const getSalary = ( id, callback ) =>
{
	const salary = salaries.find(slr => slr.id === id)?.salary;
	return salary ? callback(null, salary) : callback(`The salary for worker with id ${ id } do not exist.`);
};

const id = 3;

getWorker(id, (err, worker) => {
	if (err)
	{
		console.log('ERROR!');
		return console.log(err);
	}

	getSalary(id, (err, salary) => {
		if (err)
		{
			console.log('ERROR!');
			return console.log(err);
		}

		console.log(`The worker ${worker} has a salary of ${salary}`);
	});
});
