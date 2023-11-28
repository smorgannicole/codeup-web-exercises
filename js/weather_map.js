import Forecast from "./api/openweather.js";
import Mapbox from "./api/mapbox.js";

//MAIN
(async () => {
    const forecastInstance = new Forecast();
    const mapboxInstance = new Mapbox();

    const sanAntonioForecast = await forecastInstance.getForecast(29.4252, -98.4946);
    console.log(sanAntonioForecast)
    const coordinates = await mapboxInstance.getCoordinates('San Antonio, Texas');
    const map = await mapboxInstance.createMap('map', [-98.4946, 29.4252], 9);
    const address = await mapboxInstance.getAddress(-98.4946, 29.4252);
    const popupHTML = '<h1>San Antonio</h1>';
    const markerCoordinates = [-98.4946, 29.4252];
    const marker = await mapboxInstance.createMarker(map, markerCoordinates, popupHTML);

    const mapFor5Days = await forecastInstance.fiveDayMap(sanAntonioForecast);
    console.log(mapFor5Days)
})();