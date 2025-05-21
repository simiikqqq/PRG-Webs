/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")  // vyhledání dat z webu
    .then(response => {

        if(!response.ok){  // kontrola připojení
            throw new Error("HTTP error");
        }
        return response.json();
    })
    .then(data => console.log(data))  // vypisování dat
    .catch(error => console.error(error));  // vypisování erroru*/


async function fetchData(){  // stejná funcke ale s async

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("HTTP error");
        }
        
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;  // front_default = obrázek pokemona
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}