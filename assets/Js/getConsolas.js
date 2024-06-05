export const getConsolas = async() => {
	try {
		const response = await fetch("https://consola-api.onrender.com/");
		const data = await response.json();

		return data.consolas;
	} catch(error) {
		console.log(`El error es: ${error}`);
	}
}