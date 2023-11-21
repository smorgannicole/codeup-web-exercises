import {getTools} from "./inventory.api.js";

const createToolElement = (tool) => {
    const toolElement = document.createElement(`div`);
    toolElement.classList.add(`row`);
    toolElement.innerHTML = `
        <div class="col d-flex flex-column">
            <p>Type: ${tool.title}</p>
            <p>Inventory: ${tool.quantity}</p>
            <p>Category: ${tool.categories.join(", ")}</p>
            <p>Price: ${tool.price}</p>
        </div>
    `;
    // add any event listeners to the element here

    return toolElement;
}
const updateToolElements = (tools) => {
    const toolsContainer = document.querySelector('#tools');
    toolsContainer.innerHTML = "";
    // filter logic
    let filteredTools = tools;
    // run filteredTools through a series of filters based on user input

    // build a fragment to hold all the tool elements
    const toolsFragment = document.createDocumentFragment();
    for (let tool of filteredTools) {
        const toolElement = createToolElement(tool);
        toolsFragment.appendChild(toolElement);
    }
    toolsContainer.appendChild(toolsFragment);
}

//MAIN
(async () => {
    const tools = await getTools();
    updateToolElements(tools);

})();