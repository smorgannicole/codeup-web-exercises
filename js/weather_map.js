import Forecast from "./api/openweather.js";
import Mapbox from "./api/mapbox.js";

// createCard = (forecast) returns node
// updateCards = (forecasts)

const updateCards = async (searchTerm, map) => {
    const coordinates = await Mapbox.getCoordinates(searchTerm);
    const forecasts = await Forecast.getForecast(29.4252, -98.4946);
    const mapFor5Days = await Forecast.fiveDayMap(forecasts);
    // loop through mapFor5Days
    // create a card
    // append the card to the dom

    // map.flyTo the new coords
}

//MAIN
(async () => {
    // const months = [
    //     "Jan",
    //     "Feb",
    //     "Mar",
    //     "Apr",
    //     "May",
    //     "Jun",
    //     "Jul",
    //     "Aug",
    //     "Sep",
    //     "Oct",
    //     "Nov",
    //     "Dec"
    // ]
    // console.log(months[10]);
    // const day = new Date(1701206207 * 1000);
    // const dayString = `${months[day.getMonth()]} ${day.getDay()}, ${day.getFullYear()}`;
    // console.log(dayString);
    // console.log(sanAntonioForecast)

    const map = await Mapbox.createMap('map', [-98.4946, 29.4252], 9);
    await updateCards("San Antonio, TX", map);

    // add an event listener to a search input here
    // runs updateCards
})();