import {keys} from "./keys.js";

//MAIN
(async () => {
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-98.49, 29.42],
        zoom: 9,
    })
})();