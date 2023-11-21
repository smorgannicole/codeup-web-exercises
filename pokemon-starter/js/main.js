import {getPokemon} from "./pokemon-api.js";

const getPokemonAll = async (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(url, options)
        .then(response => response.json())
        .catch((error) => console.log(error));
}

(() => {
    // getPokemon("munkidori").then((pokemon) => {
    //     console.log(pokemon);
    // });
    getPokemonAll().then(list => {
        console.log(list)
    })
})();