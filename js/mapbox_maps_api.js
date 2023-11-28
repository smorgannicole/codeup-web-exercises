import {keys} from "./keys.js";

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


const getCoordinates = async (searchText) => {
    searchText = encodeURIComponent(searchText);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.features[0].center;
    } catch (err) {
        console.error(err);
        return null;
    }
};
const createMap = (elementId, coordinates, zoom = 9) => {
    const map = new mapboxgl.Map({
        container: elementId,
        style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
        center: coordinates, // starting position [lng, lat]
        zoom: 9, // starting zoom
        keyboard: false,
    });
    map.flyTo({
        center: coordinates,
        zoom,
        speed: 2,
    });
    return map;
};
const getAddress = async (lng, lat) => {
    if (Array.isArray(lng)) {
        lat = lng[1];
        lng = lng[0];
    }
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.features[0].place_name;
    } catch (err) {
        console.error(err);
        return null;
    }
};
const createMarker = (map, coordinates, popupHTML) => {
    const popup = new mapboxgl.Popup().setHTML(popupHTML);
    const marker = new mapboxgl.Marker({draggable: false}).setLngLat(coordinates).addTo(map).setPopup(popup);
};

//MAIN
(async () => {
    // get the coordinates of the address we're starting with
    const coordinates = await getCoordinates("San Marcos, TX");
    // initialize our token into mapboxgl
    mapboxgl.accessToken = keys.mapbox;
    // create the map
    const map = createMap("map", coordinates, 10);
    for (let restaurant of restaurants) {
        const coordinates = await getCoordinates(restaurant.address);

        const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
        const popup = new mapboxgl.Popup({offset: 25}).setHTML(`
            <h3>${restaurant.name}</h3>
            <p>
                <a href="${restaurant.website}">${restaurant.website}</a>
            </p>
        `);
        marker.setPopup(popup);
    }
})();