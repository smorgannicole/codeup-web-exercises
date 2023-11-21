const getTools = () => {
    const url = `./inventory.json`;
    const options = {
        method: "GET",
        "Content-Type": "application/json",
    }
    return fetch(url, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

//MAIN
(() => {
    getTools().then(tools => {
        console.log(tools);
    })
})();