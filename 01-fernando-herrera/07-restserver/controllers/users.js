const { response, request } = require('express');	// para tener el autocompletado de res

const usersGet = (req = request, res = response) =>
{
	const query = req.query;

	res.json({
		message: 'get API - controller',
		query,
	});
}

const usersPut = (req = request, res = response) =>
{
	const { id } = req.params;

	res.json({
		message: 'put API - controller',
		id,
	});
}

const usersPost = (req, res = response) =>
{
	const body = req.body;

	res.json({
		message: 'post API - controller',
		body,
	});
}

const usersDelete = (req, res = response) =>
{
	res.json({
		message: 'delete API - controller',
	});
}

module.exports = {
	usersGet,
	usersPut,
	usersPost,
	usersDelete,
};
