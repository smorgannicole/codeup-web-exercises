import Forecast from "./api/openweather.js";
import Mapbox from "./api/mapbox.js";

const renderLeftHero = (forecast, index) => {
    const forecastElement = document.createElement(`div`);
    forecastElement.classList.add(`purpleBg`, `temp`, `p-3`, `d-flex`, `flex-column`, `num${index}`);
    const currentDate = new Date();
    const forecastDate = new Date(forecast.day * 1000);
    const temperature = forecastDate > currentDate ? parseInt(forecast.avg_temp) : parseInt(forecast.current_temp);
    forecastElement.innerHTML = `
        <div class="d-flex flex-column">
            <h2 style="font-weight: 300; font-size: 500%">${temperature}<span
                                style="font-size: 70%; font-weight: 200; opacity: 40%">°F</span>
            </h2>
            <p class="opacity">${forecast.description}</p>
        </div>
        <div class="d-flex flex-column mt-5">
            <p class="opacity mb-1">${parseInt(forecast.temp_min)} <span style="font-size: 80%">°F</span> / ${parseInt(forecast.temp_max)} <span style="font-size: 80%">°F</span></p>
            <p class="opacity mb-1">${parseInt(forecast.wind_speed)} m/h Wind</p>
            <p class="opacity mb-1">${forecast.humidity}% Humidity</p>
        </div>
    `;
    document.querySelector("#leftSideHero").appendChild(forecastElement);
    return forecastElement;
};
const getImagePath = (description) => {
    switch (description.toLowerCase()) {
        case "clouds":
            return "../img/clouds.png";
        case "atmosphere":
            return "../img/clouds.png";
        case "drizzle":
            return "../img/clouds.png";
        case "clear":
            return "../img/clear.png";
        case "snow":
            return "../img/snow.png";
        case "rain":
            return "../img/rain.png";
        case "thunderstorm":
            return "../img/thunderstorm.png";
        default:
            return "../img/clouds.png";
    }
};
const getQuote = (description) => {
    switch (description.toLowerCase()) {
        case "clouds":
            return `"Picture yourself in a boat on a river\n With tangerine trees and marmalade skies<br><em><span style="font-weight: 500">Lucy in the Sky with Diamonds</span> by The Beatles</em>`;
        case "atmosphere":
            return `"Picture yourself in a boat on a river\n With tangerine trees and marmalade skies<br><em><span style="font-weight: 500">Lucy in the Sky with Diamonds</span> by The Beatles</em>`;
        case "drizzle":
            return `"Until the rain starts, coming down, pouring<br>Chill, I got my umbrella <br> <em><span style="font-weight: 500">The Rain (Supa Dupa Fly)</span> by Missy Elliott</em>`;
        case "clear":
            return "sunny lyrics";
        case "snow":
            return "Snow lyrics";
        case "rain":
            return `"Purple rain, purple rain, I only wanted to see you, Bathing in the purple rain"<br> <em><span style="font-weight: 500">Purple Rain</span> by Prince</em>`;
        case "thunderstorm":
            return "thunderstorm lyrics";
        default:
            return "default lyrics";
    }
}
const renderRightHero = (forecast) => {
    const description = forecast.description;
    const imgPath = getImagePath(description);
    const quote = getQuote(description);
    const imgQuoteElement = document.createElement(`div`);
    imgQuoteElement.classList.add(`d-flex`, `flex-column`, `purpleBg`, `rightMostCol`, `p-3`, `align-items-end`, `justify-space-between`);
    imgQuoteElement.innerHTML = `
        <div class="d-flex justify-content-end">
            <img style="max-width: 60%" src="${imgPath}" alt="">
        </div>
        <div style="font-weight: 300; opacity: 70%" class="d-flex flex-column flex-grow-1 align-items-end justify-content-end">
            <p>${quote}</p>
        </div>
    `;
    document.querySelector("#rightSideHero").appendChild(imgQuoteElement);
    return imgQuoteElement;
}
const getCurrentDay = (timeStamp) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
    const day = new Date(timeStamp * 1000);
    const dayString = `${months[day.getMonth()]} ${day.getDay()}, ${day.getFullYear()}`;
    return `${months[day.getMonth()]} ${day.getDate()} ${day.toLocaleString('en-us', {weekday: 'long'})}`;
}
const renderTabButtons = (forecast) => {
    const btnParent = document.querySelector('.btnParent');
    btnParent.innerHTML = '';
    forecast.forEach((day, index) => {
        const dayDate = getCurrentDay(day.day);
        const button = document.createElement(`button`);
        button.classList.add(`tabLinks`);
        button.innerHTML = `
            <span style="font-weight: 400; font-size: 120%">${dayDate}</span>
        `;
        button.setAttribute('data-date', `${index}`);
        btnParent.appendChild(button);
    });
    return btnParent;
};
const renderHeader = (forecast, address) => {
    const dayInfo = forecast.day;
    const dayDate = getCurrentDay(dayInfo);
    const headerElement = document.createElement(`div`);
    headerElement.classList.add(`col`, `d-flex`, `justify-content-end`);
    headerElement.innerHTML = `
        <div class="col">
            <h1 style="font-weight: 300">${address}</h1>
            <p>${dayDate}</p>
        </div>
    `;
    const headerParent = document.querySelector(".headerParent");
    if (headerParent.firstChild) {
        headerParent.removeChild(headerParent.firstChild);
    }
    headerParent.insertAdjacentElement('afterbegin', headerElement);
    return headerElement;
};
const eventHandler = (mapFor5Days) => {
    const searchBtn = document.querySelector(`.searchBtn`);
    const searchInput = document.querySelector(`#search`);
    searchBtn.addEventListener(`click`, async e => {
        e.preventDefault();
        let enteredAddress = searchInput.value;
        await updateCards(enteredAddress);
        searchInput.value = ``;
    });
    const buttons = document.querySelectorAll('.tabLinks');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener(`click`, () => {
            const buttonId = buttons[i].getAttribute('data-date');
            clearExistingContent();
            renderLeftHero(mapFor5Days[buttonId], buttonId);
            renderRightHero(mapFor5Days[buttonId], buttonId);
        });
    }
};
const updateCards = async (searchTerm) => {
    const coordinates = await Mapbox.getCoordinates(searchTerm);
    const lat = coordinates[0];
    const lng = coordinates[1];
    const forecasts = await Forecast.getForecast(lng, lat);
    const mapFor5Days = await Forecast.fiveDayMap(forecasts);
    setTimeout(async () => {
        const mapElement = document.querySelector(`#map`);
        mapElement.classList.remove(`hide`);
        await Mapbox.createMap("map", [lat, lng], 9);
    }, 100)
    setTimeout(async () => {
        const mapElement = document.querySelector(`#map`);
        mapElement.classList.add(`hide`);
    }, 4000)

    clearExistingContent();

    for (let day of mapFor5Days) {
        await renderLeftHero(day);
        await renderRightHero(day);
        await renderTabButtons(mapFor5Days);
    }

    renderHeader(mapFor5Days[0], searchTerm);
    await Mapbox.createMap("map", coordinates, 9);
    const clearHeaderContent = () => {
        document.querySelector('.headerParent').innerHTML = '';
    };
};
// const renderForecast = (selectedForecast) => {
//
// };
const clearExistingContent = () => {
    document.querySelector(`#leftSideHero`).innerHTML = "";
    document.querySelector(`#rightSideHero`).innerHTML = "";
};

//MAIN
(async () => {
    const forecasts = await Forecast.getForecast(29.4252, -98.4946);
    const mapFor5Days = await Forecast.fiveDayMap(forecasts);
    mapFor5Days.forEach((day, index) => {
        renderTabButtons(mapFor5Days);
    })
    await renderHeader(mapFor5Days[0], `San Antonio`);
    eventHandler(mapFor5Days);
})();