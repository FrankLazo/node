const { readInput, inquirerMenu, pause, placesList } = require("./helpers/inquirer");
const Searches = require("./models/searches");

const main = async () =>
{
	const searches = new Searches();
	let option;

	do
	{
		option = await inquirerMenu();

		switch (option)
		{
			case 1:
				// Show message
				const term = await readInput('Insert city: ');

				// Search places
				const places = await searches.city(term);

				// Select place
				const placeID = await placesList(places);

				if (placeID === 0)
				{
					continue;
				}

				const city = places.find(place => place.id === placeID);

				// Save place
				searches.addToHistory(city.name);

				// Weather
				const weather = await searches.weatherByLocation(city.latitude, city.longitude);

				// Results
				console.clear();
				console.log(`\nCity information:\n`.green);
				console.log(`City:        `, city.name.green);
				console.log(`Lat:         `, city.latitude);
				console.log(`Lng:         `, city.longitude);
				console.log(`Temperature: `, `${ weather.temperature } ºC`);
				console.log(`Description: `, weather.description.green);
				console.log(`Minimum:     `, `${ weather.minimum } ºC`);
				console.log(`Maximum:     `, `${ weather.maximum } ºC`);

				break;

			case 2:
				if (searches.capitalizedHistory.length !== 0)
				{
					console.log('\n');

					searches.capitalizedHistory.forEach((place, i) => {
						const index = `${ i + 1 }.`.green;
						console.log(`${ index } ${ place }`);
					});
				}

				break;
		}

		if (option !== 0)
		{
			await pause();
		}
	}
	while (option !== 0);
};

main();
