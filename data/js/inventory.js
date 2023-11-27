import {getTools} from "./inventory.api.js";
import {formatMoney} from "../../js/utils.js";

const createToolElement = (tool, index) => {
    const toolElement = document.createElement(`div`);
    toolElement.classList.add(`col-3`, `cardBg`, `d-flex`, `flex-column`, `p-2`);
    toolElement.innerHTML = `
        <p class="text-center" style="font-size: 18px; letter-spacing: 2px; font-weight: lighter; color: var(--clr-warm-yllw)">${tool.title}</p>
        <p>Inventory: ${tool.quantity}</p>
        <p>Category: ${tool.categories.join(", ")}</p>
        <p>Price: ${formatMoney(tool.price)}</p>
        <button class="cartBtn" data-cart="${index}">ADD TO CART</button>
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
    tools.forEach((tool, index) => {
        const toolElement = createToolElement(tool, index);
        toolsFragment.appendChild(toolElement);

    })
    toolsContainer.appendChild(toolsFragment);
}
const eventHandler = () => {
    const tabLinks = document.querySelectorAll('.tabLinks');
    const tabContents = document.querySelectorAll('.tabContent');
    const h2Text = document.querySelector('.dynamicHeading');
    const h1Text = document.querySelector('.nameOfSite');
    const hNavCols = document.querySelectorAll('.hNavCol');
    const contactButtons = document.querySelector(`.contactButtons`);
    const addToCartBtns = document.querySelector(`.cartBtn`);
    const shoppingCartBtn = document.querySelector(`.shoppingBtn`);
    const cart = document.querySelector(`.shoppingCart`);
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

    // const discountSelector = document.querySelector('#discount-selector');
    // const overlayGrab = document.querySelector('#overlay-grab');
    //
    // discountSelector.classList.remove('hide-discount');
    // discountSelector.classList.add('pop-up');
    // overlayGrab.classList.add('overlay');
    //
    // const closeButton = document.querySelector('#closeButton');
    // closeButton.addEventListener('click', closePopup);
    // const emailButton = document.querySelector('#email-btn');
    // emailButton.addEventListener('click', closePopup);

    shoppingCartBtn.addEventListener(`click`, e => {
        cart.classList.toggle(`hide-shopping-cart`);
    })

    for (let i = 0; i < addToCartBtns.length; i++) {
        addToCartBtns[i].addEventListener('click', e => {
            const buttonId = addToCartBtns[i].getAttribute('data-add');
            const clickedAddBtn = document.querySelector(`#${buttonId}`);
            if (clickedAddBtn) {

            }
        });
    }
};
//MAIN
(async () => {
    const tools = await getTools();
    updateToolElements(tools);
    eventHandler();
})();