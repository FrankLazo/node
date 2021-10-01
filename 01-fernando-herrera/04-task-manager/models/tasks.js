const Task = require("./task");

class Tasks
{
	get arrayList () {
		const taskList = [];

		Object.keys(this._taskList).forEach(key => {
			const task = this._taskList[key];
			taskList.push( task );
		});

		return taskList;
	}

	constructor ()
	{
		this._taskList = {};
	}

	createTask ( description = '' )
	{
		const task = new Task(description);
		this._taskList[task.id] = task;
	}

	deleteTask ( id = '' )
	{
		if (this._taskList[id])
		{
			delete this._taskList[id];
		}
	}

	loadTasksFromFile ( data = [] )
	{
		data.forEach(task => {
			this._taskList[task.id] = task;
		});
	}

	fullList ()
	{
		console.log('\n');

		this.arrayList.forEach((task, index) => {
			console.log(`${ ((index + 1).toString() + '.').green } ${ task.description } :: ${ task.completedDate ? 'Done'.green : 'In queue'.red }`);
		});
	}

	listDoneOrInQueue (done = true)
	{
		console.log('\n');
		const tasks = this.arrayList.filter(task => !!task.completedDate === done);

		tasks.forEach((task, index) => {
			console.log(`${ ((index + 1).toString() + '.').green } ${ task.description } :: ${ done ? task.completedDate.green : 'In queue'.red }`);
		});
	}

	togglesCompletedOnes ( ids = [] )
	{
		ids.forEach( id => {
			const task = this._taskList[id];

			if (!task.completedDate)
			{
				task.completedDate = new Date().toISOString();
			}
		});

		this.arrayList.forEach(task => {
			if ( !ids.includes(task.id) )
			{
				this._taskList[task.id].completedDate = null;
			}
		});
	}
}

module.exports = Tasks;
