import {houses} from "../data/austin-houses.js";
import {makeItADolla} from "./utils.js";

const renderHouseCard = (house) => {
    const houseCard = document.createElement("article");
    houseCard.classList.add("house");
    houseCard.innerHTML = `
        <img src="${house.info3String}">
        <div class="d-flex flex-column p-4">
            <p class="address">${house.addressStreet}</p>
            <p class="detail">Beds: ${house.beds}</p>
            <p class="detail">Baths: ${house.baths}</p>
            <p class="price">${makeItADolla(house.price)}</p>
        </div>
    `;
    // add event listeners for card here
    document.querySelector("#houses").appendChild(houseCard);
};

// MAIN
(() => {
    // sort by lowest price
    houses.sort((a, b) => a.price - b.price);
    for (let house of houses) {
        renderHouseCard(house);
    }
})();