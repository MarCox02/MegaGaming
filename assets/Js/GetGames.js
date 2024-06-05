export const getGames = async() => {
	try {
		const response = await fetch("https://megagames-api.onrender.com/");
		const data = await response.json();

		return data.games;
	} catch(error) {
		console.log(`El error es: ${error}`);
	}
}