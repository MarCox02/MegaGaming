import { getGames } from "./getGames.js";	
import { getConsolas } from "./GetConsoles.js";

//--------------------- JUEGOS ------------------------------
const enviarDatos = (id, nombre, imagen, desarrolladores, genero, descripcion, precio) => {

	const rutaArchivoHTML = ".../jogo.html";

	fetch(rutaArchivoHTML)
		.then(response => response.text())
		.then( (html) => {
			const parser = new DOMParser();
			const doc = parser.parseFromString(html, "text/html");

			const gameImagen = doc.getElementById('imagen');
			gameImagen.src = imagen;

			const gameNombre = doc.getElementById('nombre');
			gameNombre.textContent = `${nombre}`;

			const gameGenero = doc.getElementById('genero');
			gameGenero.textContent = `Genero: ${genero}`;
			
			const gameDev = doc.getElementById('desarrolladores');
			gameDev.textContent = `Desarrolladores: ${desarrolladores}`;
			
			const gameDescripcion = doc.getElementById('descripcion');
			gameDescripcion.textContent = `descripcion: ${descripcion}`;

			const gamePrecio = doc.getElementById('precio');
			gamePrecio.textContent = `Precio: $${precio.toLocaleString()}`;

			const nuevoHTML = new XMLSerializer().serializeToString(doc);
			document.body.innerHTML = nuevoHTML;
		})
		.catch((error) => {
			console.log(`El error es: ${error}`);
		})
	
}

const crearCard = (results = []) => {
	let juegosRow = document.getElementById("juegosRow");

	results.map( (result) => {
		
        const {id, nombre, imagen, desarrolladores, genero, descripcion, precio} = result;

		const divCol = document.createElement("div");
		divCol.classList.add("col-xl-4");
		divCol.classList.add("col-lg-4");
		divCol.classList.add("col-md-6");
		divCol.classList.add("col-sm-12");
		divCol.classList.add("col-xs-12");
		divCol.classList.add("mt-2");
		divCol.classList.add("mb-2");

		const card = document.createElement("div");
		card.classList.add("card");

		const image = document.createElement("img");
        image.src = imagen;
        image.alt = `Imagen de: ${nombre}`;
        image.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = nombre;

        const titleGenero = document.createElement("p");
        titleGenero.classList.add("card-text");
        titleGenero.textContent = `Genero: ${genero}`;

		const titlePrecio = document.createElement("p");
        titlePrecio.classList.add("card-text");
		titlePrecio.classList.add("textoRojo");
        titlePrecio.textContent = `Precio: $${precio.toLocaleString()}`;


		divCol.append(card);
		card.appendChild(image);
		card.appendChild(divBody);
		divBody.appendChild(title);
		divBody.appendChild(titleGenero);
		divBody.appendChild(titlePrecio);
		juegosRow.appendChild(divCol);
	});
}

//---------------------- CONSOLAS -----------------------

const crearCardCon = (results = []) => {
	let consolasRow = document.getElementById("consolasRow");

	results.map( (result) => {
		
        const {id, nombre, imagen, creadores, precio} = result;

		const divCol = document.createElement("div");
		divCol.classList.add("col-xl-4");
		divCol.classList.add("col-lg-4");
		divCol.classList.add("col-md-6");
		divCol.classList.add("col-sm-12");
		divCol.classList.add("col-xs-12");
		divCol.classList.add("mt-2");
		divCol.classList.add("mb-2");

		const card = document.createElement("div");
		card.classList.add("card");

		const image = document.createElement("img");
        image.src = imagen;
        image.alt = `Imagen de: ${nombre}`;
        image.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = nombre;



		const titlePrecio = document.createElement("p");
        titlePrecio.classList.add("card-text");
		titlePrecio.classList.add("textoRojo");
        titlePrecio.textContent = `Precio: $${precio.toLocaleString()}`;


		divCol.append(card);
		card.appendChild(image);
		card.appendChild(divBody);
		divBody.appendChild(title);
		divBody.appendChild(titlePrecio);
		juegosRow.appendChild(divCol);
	});
}








// ------------- FUNCIONES ----------------
getGames()
	.then( (data) => {
		crearCard(data);
		console.log(data);
	})
	.catch( (error) => {
		console.log(`El error es: ${error}`);
	})

getConsolas()
	.then( (data) => {
		crearCardCon(data);
		console.log(data);
	})
	.catch( (error) => {
		console.log(`El error es: ${error}`);
	})