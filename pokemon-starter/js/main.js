import {getPokemon} from "./pokemon-api.js";

const getPokemonAll = async (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    let list = await response.json();
    const pokemon = await Promise.all(list.results.map((item) => getPokemon(item.name)));
    list.results = pokemon;
    return list;
};

(() => {
    // getPokemon("munkidori").then((pokemon) => {
    //     console.log(pokemon);
    // });
    getPokemonAll().then(list => {
        console.log(list)
    })
})();