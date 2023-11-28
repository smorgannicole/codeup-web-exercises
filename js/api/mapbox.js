import {keys} from "../keys.js";

class Mapbox {
    static async getCoordinates(searchText) {
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
    }

    static async createMap(elementId, coordinates, zoom = 9) {
        mapboxgl.accessToken = keys.mapbox;
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

    static async getAddress(lng, lat) {
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

    static async createMarker(map, coordinates, popupHTML) {
        const popup = new mapboxgl.Popup().setHTML(popupHTML);
        const marker = new mapboxgl.Marker({draggable: false}).setLngLat(coordinates).addTo(map).setPopup(popup);
        return marker;
    };

}

export default Mapbox;



