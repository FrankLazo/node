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

const getWorker = ( id ) =>
{
	return new Promise((resolve, reject) => {
		const worker = workers.find(wkr => wkr.id === id)?.name;

		worker
			? resolve(worker)
			: reject(`The worker with id ${ id } do not exist.`);
	});
};

const getSalary = ( id ) =>
{
	return new Promise((resolve, reject) => {
		const salary = salaries.find(slr => slr.id === id)?.salary;

		salary
		? resolve(salary)
		: reject(`The salary for worker with id ${ id } do not exist.`);
	});
};

const id = 3;
let workerName;

// Promises chaining

getWorker(id)
	.then(worker => {
		workerName = worker;
		return getSalary(id);
	})
	.then(salary => console.log(`The worker ${workerName} has a salary of ${salary}`))
	.catch(err => console.log(err));

// Promise hell

// getWorker(id)
// 	.then(worker => {
// 		getSalary(id)
// 			.then(salary => console.log(`The worker ${worker} has a salary of ${salary}`))
// 			.catch(err => console.log(err));
// 	})
// 	.catch(err => console.log(err));
