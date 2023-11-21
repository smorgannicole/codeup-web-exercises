import {keys} from "./keys.js";

const getUserData = (id = `smorgannicole`) => {
    const url = `https://api.github.com/users/${id}`;
    const options = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${keys.github}`,
        },
    };
    return fetch(url, options)
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

(() => {
    getUserData().then(info => {
        console.log(info);
    })
})();