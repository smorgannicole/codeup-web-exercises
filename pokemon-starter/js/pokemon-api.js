export const getPokemon = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(url, options)
        .then((response) => response.json())
        .catch((error) => console.log(error));
}
