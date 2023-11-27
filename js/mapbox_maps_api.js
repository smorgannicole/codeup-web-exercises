import {keys} from "./keys.js";

const getCoordinates = async (searchText) => {
    searchText = encodeURIComponent(searchText);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.features[0].center;
};
const createMap = (elementId, coordinates) => {
    const map = new mapboxgl.Map({
        container: elementId,
        style: "mapbox://styles/mapbox/navigation-night-v1",
        center: coordinates,
        zoom: 9,
        keyboard: false,
    });
    map.flyTo({
        center: coordinates,
        zoom: 16,
        speed: 2,
    });
    return map;
};
const createMarker = (map, coordinates, popupHTML) => {
    const popup = new mapboxgl.Popup().setHTML(popupHTML);
    const marker = new mapboxgl.Marker({draggable: false}).setLngLat(coordinates).addTo(map).setPopup(popup);
};

//MAIN
(async () => {
    const restaurants = [
        {
            name: "North Street",
            address: "216 North Street, San Marcos, Tx 78666",
            description: "Indian-inspired dishes with Texas flair alongside more traditional Indian classics",
        },
        {
            name: "Don Japanese Kitchen",
            address: "829 N LBJ Dr, San Marcos, TX 78666",
            description: "Traditional Japanese rice place with large portions and affordable prices."
        },
        {
            name: "Krause's Kitchen",
            address: "148 S Castell Ave, New Braunfels, TX 78130",
            description: "Lively beer garden & taproom with beers, wines & margaritas on tap, plus American & German fare.",
        },
    ]

    mapboxgl.accessToken = keys.mapbox;
    const map = createMap("map", await getCoordinates(restaurants[0].address));

    for (let i = 0; i < restaurants.length; i++) {
        const coordinates = await getCoordinates(restaurants[i].address);
        createMarker(map, coordinates, restaurants[i].name);
    }
})();