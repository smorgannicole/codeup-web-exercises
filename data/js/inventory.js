import {getTools} from "./inventory.api.js";
import {formatMoney} from "../../js/utils.js";

const createToolElement = (tool) => {
    const toolElement = document.createElement(`div`);
    toolElement.classList.add(`row`);
    toolElement.innerHTML = `
        <div class="col d-flex flex-column">
            <p>Type: ${tool.title}</p>
            <p>Inventory: ${tool.quantity}</p>
            <p>Category: ${tool.categories.join(", ")}</p>
            <p>Price: ${formatMoney(tool.price)}</p>
        </div>
    `;
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
const eventHandler = () => {
    const tabLinks = document.querySelectorAll('.tabLinks');
    const tabContents = document.querySelectorAll('.tabContent');
    const h1Text = document.querySelector(`.nameOfSite`);
    for (let tab of tabLinks) {
        tab.addEventListener('click', e => {
            const tabId = tab.getAttribute('data-tab');
            for (let content of tabContents) {
                content.classList.remove('active');
            }
            const selectedTab = document.querySelector(`#${tabId}`);
            if (selectedTab) {
                selectedTab.classList.add('active');
            }
        });
    }
    h1Text.addEventListener(`click`, e => {
        for (let content of tabContents) {
            content.classList.remove('active');
        }
    })
};
//MAIN
(async () => {
    const tools = await getTools();
    updateToolElements(tools);
    eventHandler();
})();