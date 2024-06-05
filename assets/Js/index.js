import {games, console} from './games.js' ;

function getGames(){

    let gamesRow = document.getElementById("gamesRow");
    
    games.map(function(games){

        const divCol = document.createElement('div');
        divCol.classList.add('col-xl-4');
        divCol.classList.add('col-lg-4');
        divCol.classList.add('col-md-6');
        divCol.classList.add('col-sm-6');
        divCol.classList.add('col-xs-6');
        divCol.classList.add('mt-2');
        divCol.classList.add('mb-2');
    
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = `${games.imagen}`;
        img.alt = `Imagen de ${games.nombre}`;
        img.classList.add('card-img-top');

        const divBody = document.createElement('div');
        divBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('cart-title');
        title.textContent = `${games.nombre}`;

        const subtitle = document.createElement('p');
        subtitle.classList.add('card-text');
        subtitle.textContent = `Desarrollador: ${games.desarrolladores} `;

        
        const subtitle3 = document.createElement('p');
        subtitle3.classList.add('card-text');
        subtitle3.textContent = `Precio: ${games.precio} `;

        divBody.appendChild(title);
        divBody.appendChild(subtitle);
        divBody.appendChild(subtitle3);
        card.appendChild(img);
        card.appendChild(divBody);
        

        divCol.appendChild(card);

        gamesRow.appendChild(divCol);





    })
}



getGames()