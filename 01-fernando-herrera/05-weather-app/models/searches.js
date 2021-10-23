const fs = require('fs');
const axios = require('axios');

class Searches
{
	historial = [];
	dbPath = './01-fernando-herrera/05-weather-app/db/data.json';

	constructor()
	{
		this.readDB();
	}

	get capitalizedHistory()
	{
		return this.historial.map(place => {
			let words = place.split(' ');
			words = words.map(word => word[0].toLocaleUpperCase() + word.substring(1));

			return words.join(' ');
		});
	}

	get mapboxParams()
	{
		return {
			limit: 6,
			language: 'es',
			access_token: process.env.MAPBOX_KEY,
		};
	}

	get openWeatherParams()
	{
		return {
			lang: 'es',
			units: 'metric',
			appid: process.env.OPENWEATHER_KEY,
		};
	}

	async city(place = '')
	{
		try
		{
			const instance = axios.create({
				baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
				params: this.mapboxParams,
			});

			const resp = await instance.get();

			return resp.data.features.map(place => ({
				id: place.id,
				name: place.place_name,
				latitude: place.center[1],
				longitude: place.center[0],
			}));
		}
		catch (error)
		{
			return [];
		}
	}

	async weatherByLocation(lat, lon)
	{
		try
		{
			const instance = axios.create({
				baseURL: `https://api.openweathermap.org/data/2.5/weather`,
				params: { ...this.openWeatherParams, lat, lon },
			});

			const resp = await instance.get();
			const { weather, main } = resp.data;

			return {
				description: weather[0].description,
				temperature: main.temp,
				minimum: main.temp_min,
				maximum: main.temp_max,
			};
		}
		catch (error)
		{
			console.error(error);
		}
	}

	addToHistory(place = '')
	{
		if (this.historial.includes( place.toLocaleLowerCase() ))
		{
			return;
		}

		this.historial = this.historial.splice(0, 5);
		this.historial.unshift( place.toLocaleLowerCase() );
		this.saveDB();
	}

	saveDB()
	{
		const payload = {
			historial: this.historial,
		};

		fs.writeFileSync(this.dbPath, JSON.stringify(payload));
	}

	readDB()
	{
		if (!fs.existsSync(this.dbPath))
		{
			return;
		}

		const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
		const data = JSON.parse(info);
		this.historial = data.historial;
	}
}

module.exports = Searches;
