const getUser = (id, callback) =>
{
	const user =
	{
		id,
		name: 'Frank',
	}

	setTimeout(() => {
		callback(user);
	}, 1000);
}

getUser(10, (user) => {
	console.log(user.id);
	console.log(user.name.toUpperCase());
});
