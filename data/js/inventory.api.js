// all "transferable" elements here
export const getTools = async () => {
    const url = `./inventory.json`;
    const options = {
        method: "GET",
        "Content-Type": "application/json",
    }
    const response = await fetch(url, options)
    return await response.json();
}