const deadpool =
{
	fname: 'Wade',
	lname: 'Winston',
	power: 'Regeneration',
	getName()
	{
		return `${ this.fname } ${ this.lname } ${ this.power }`;
	}
}

const { fname, lname, power, age = 35 } = deadpool;
console.log(fname, lname, power, age);

function hero ({ fname, lname, power, age = 30 })
{
	fname = 'Frank';
	console.log(fname, lname, power, age);
}

hero( deadpool );

const heroes = ['Deadpool', 'Superman', 'Batman'];
const [ , , h3 ] = heroes;

console.log(h3);
