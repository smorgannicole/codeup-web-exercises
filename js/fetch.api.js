import {keys} from "./keys.js";

export const getUserData = async (id = `smorgannicole`) => {
    const url = `https://api.github.com/users/${id}`;
    const options = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${keys.github}`,
        },
    };
    const response = await fetch(url, options)
    let list = await response.json();
    return response;
}
