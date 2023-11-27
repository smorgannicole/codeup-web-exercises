import {getTools} from "./inventory.api.js";
import {formatMoney} from "../../js/utils.js";

const createToolElement = (tool) => {
    const toolElement = document.createElement(`div`);
    toolElement.classList.add(`col-3`, `cardBg`, `d-flex`, `flex-column`, `p-2`);
    toolElement.innerHTML = `
        <p style="font-size: 18px; letter-spacing: 2px; font-weight: lighter; color: var(--clr-warm-yllw)">${tool.title}</p>
        <p>Inventory: ${tool.quantity}</p>
        <p>Category: ${tool.categories.join(", ")}</p>
        <p>Price: ${formatMoney(tool.price)}</p>
        <button class="cartBtn">ADD TO CART</button>
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
    const h2Text = document.querySelector('.dynamicHeading');
    const h1Text = document.querySelector('.nameOfSite');
    const hNavCols = document.querySelectorAll('.hNavCol');
    const contactButtons = document.querySelector(`.contactButtons`);
    const headings = [
        "02. ABOUT",
        "03. SERVICES",
        "04. TOOLS",
        "05. CONTACT"
    ];

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener('click', e => {
            const tabId = tabLinks[i].getAttribute('data-tab');
            for (let content of tabContents) {
                content.classList.remove('active');
            }
            const selectedTab = document.querySelector(`#${tabId}`);
            if (selectedTab) {
                selectedTab.classList.add('active');
                h2Text.innerHTML = headings[i - 1];
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    for (let i = 0; i < hNavCols.length; i++) {
        hNavCols[i].addEventListener('click', e => {
            const tabId = tabLinks[i + 1].getAttribute('data-tab');
            for (let content of tabContents) {
                content.classList.remove('active');
            }
            const selectedTab = document.querySelector(`#${tabId}`);
            if (selectedTab) {
                selectedTab.classList.add('active');
                h2Text.innerHTML = headings[i];
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }
    contactButtons.addEventListener(`click`, e => {
        for (let content of tabContents) {
            content.classList.remove('active');
        }
        const contactTab = document.querySelector(`#tab4`);
        contactTab.classList.add('active');
        h2Text.innerHTML = headings[3];
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    h1Text.addEventListener('click', e => {
        window.location.reload();
    });
};
//MAIN
(async () => {
    const tools = await getTools();
    updateToolElements(tools);
    eventHandler();
})();