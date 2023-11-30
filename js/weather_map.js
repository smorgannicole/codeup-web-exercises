import Forecast from "./api/openweather.js";
import Mapbox from "./api/mapbox.js";

const renderLeftHero = (forecast, index) => {
    const forecastElement = document.createElement(`div`);
    forecastElement.classList.add(`purpleBg`, `temp`, `p-3`, `d-flex`, `flex-column`, `flex-grow-1`, `num${index}`);
    const currentDate = new Date();
    const forecastDate = new Date(forecast.day * 1000);
    const temperature = forecastDate > currentDate ? parseInt(forecast.avg_temp) : parseInt(forecast.current_temp);
    forecastElement.innerHTML = `
        <div class="d-flex flex-column flex-grow-1">
            <h2 style="font-weight: 300; font-size: 500%">${temperature}<span
                                style="font-size: 70%; font-weight: 200; opacity: 40%">°F</span>
            </h2>
            <p class="opacity">${forecast.description}</p>
        </div>
        <div class="d-flex flex-column flex-grow-1 mt-5">
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
            return `"Behind every cloud is another cloud."<br><em><span style="font-weight: 500">- Judy Garland</span></em>`;
        case "atmosphere":
            return `"The clouds, - the only birds that never sleep."<br><em><span style="font-weight: 500">- Victor Hugo</span></em>`;
        case "drizzle":
            return `"The sky and the strong wind have moved the spirit inside me."<br><em><span style="font-weight: 500">- Uvavnuk, Inuit shaman woman</span></em>`;
        case "clear":
            return `"Keep your face always toward the sunshine - and shadows will fall behind you."<br><em><span style="font-weight: 500">- Walt Whitman</span></em>`;
        case "snow":
            return `"A snowball in the face is surely the perfect beginning to a lasting friendship."<br><em><span style="font-weight: 500">- Markus Zusak</span></em>`;
        case "rain":
            return `"I always like walking in the rain, so no one can see me crying."<br><em><span style="font-weight: 500">- Charles Chaplin</span></em>`;
        case "thunderstorm":
            return `"Thunderstorms are as much our friends as the sunshine."<br><em><span style="font-weight: 500">- Criss Jami</span></em>`;
        default:
            return "default quote";
    }
}
const renderRightHero = (forecast) => {
    const description = forecast.description;
    const imgPath = getImagePath(description);
    const quote = getQuote(description);
    const imgQuoteElement = document.createElement(`div`);
    imgQuoteElement.classList.add(`d-flex`, `flex-column`, `purpleBg`, `rightMostCol`, `p-3`, `align-items-end`, `flex-grow-1`);
    imgQuoteElement.innerHTML = `
        <div class="col d-flex justify-content-end flex-grow-1">
            <img src="${imgPath}" alt="">
        </div>
        <div style="font-weight: 300; opacity: 70%" class="col-9 d-flex flex-column flex-grow-1 align-items-end justify-content-end text-end">
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
    const fullStringDate = `<span style="font-weight: 350">${months[day.getMonth()]} ${day.getDate()} ${day.toLocaleString(`en-us`, {weekday: `long`})}</span>`;

    const shortFormattedDate = `<span style="font-weight: 300">${months[day.getMonth()]} <br> ${day.getDate()} ${day.toLocaleString(`en-us`, {weekday: `long`})}</span>`;

    return {
        fullStringDate,
        shortFormattedDate
    };
}
const renderTabButtons = (forecast) => {
    const btnParent = document.querySelector(`.btnParent`);
    btnParent.innerHTML = ``;

    forecast.forEach((day, index) => {
        const dayDate = getCurrentDay(day.day);
        const button = document.createElement(`button`);
        button.classList.add(`tabLinks`);
        button.innerHTML = `
            <span style="font-weight: 400; font-size: 120%">${dayDate.shortFormattedDate}</span>
        `;
        button.setAttribute(`data-date`, `${index}`);

        button.addEventListener(`click`, () => {
            clearExistingContent();
            renderLeftHero(forecast[index], index);
            renderRightHero(forecast[index], index);

            const allButtons = document.querySelectorAll(`.tabLinks`);
            allButtons.forEach((btn) => {
                btn.style.backgroundColor = ``;
            });
            button.style.backgroundColor = `#a9d5f8`;
        });

        btnParent.appendChild(button);

        if (index === 0) {
            button.style.backgroundColor = `#a9d5f8`;
        }
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
            <h1 class="addy" style="font-weight: 300">${address}</h1>
            <p style="font-weight: 350">${dayDate.fullStringDate}</p>
        </div>
    `;
    const headerParent = document.querySelector(".headerParent");
    if (headerParent.firstChild) {
        headerParent.removeChild(headerParent.firstChild);
    }
    headerParent.prepend(headerElement);
    return headerElement;
};
const eventHandler = (mapFor5Days) => {
    const searchBtn = document.querySelector(`.searchBtn`);
    const searchInput = document.querySelector(`#search`);
    const btnParent = document.querySelector(`.btnParent`);

    searchBtn.addEventListener(`click`, async (e) => {
        e.preventDefault();
        let enteredAddress = searchInput.value;
        await updateCards(enteredAddress);
        searchInput.value = ``;
    });

    btnParent.addEventListener(`click`, (e) => {
        if (e.target.matches(`.tabLinks`)) {
            const buttonId = e.target.getAttribute(`data-date`);
            clearExistingContent();
            renderLeftHero(mapFor5Days[buttonId], buttonId);
            renderRightHero(mapFor5Days[buttonId], buttonId);
        }
    });
};
const updateCards = async (searchTerm) => {
    const coordinates = await Mapbox.getCoordinates(searchTerm);
    const lat = coordinates[0];
    const lng = coordinates[1];
    const forecasts = await Forecast.getForecast(lng, lat);
    const mapFor5Days = await Forecast.fiveDayMap(forecasts);
    setTimeout(async () => {
        const mapElement = document.querySelector(`#map`);
        const mapParent = document.querySelector(`.overlay`);
        mapElement.classList.remove(`hide`);
        mapParent.classList.remove(`hide`);
        await Mapbox.createMap("map", [lat, lng], 9);
    }, 1)
    setTimeout(async () => {
        const mapParent = document.querySelector(`.overlay`);
        const mapElement = document.querySelector(`#map`);
        mapParent.classList.add(`hide`);
        mapElement.classList.add(`hide`);
    }, 5000)

    clearExistingContent();
    await renderLeftHero(mapFor5Days[0]);
    await renderRightHero(mapFor5Days[0]);
    await renderTabButtons(mapFor5Days);

    renderHeader(mapFor5Days[0], searchTerm);
};
const clearExistingContent = () => {
    document.querySelector(`#leftSideHero`).innerHTML = "";
    document.querySelector(`#rightSideHero`).innerHTML = "";
};

//MAIN
(async () => {
    const forecasts = await Forecast.getForecast(29.4252, -98.4946);
    const mapFor5Days = await Forecast.fiveDayMap(forecasts);
    renderTabButtons(mapFor5Days);
    renderLeftHero(mapFor5Days[0], 0);
    renderRightHero(mapFor5Days[0], 0);
    await renderHeader(mapFor5Days[0], `San Antonio`);
    eventHandler(mapFor5Days);
})();