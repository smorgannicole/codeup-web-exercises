import {keys} from "../keys.js";
import {formatDateTimestamp} from "../utils.js";

class Forecast {
    /**
     * Gets a forecast form open weather api
     * @param {number} lat - latitude of coordinate
     * @param {number} lng - longitude of coordinate
     * @returns {Promise}
     */
    static async getForecast(lat, lng) {
        if (Array.isArray(lat)) {
            lng = lat[1];
            lat = lat[0];
        }
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${keys.openweather}`;
        const options = {
            method: "GET",
        };
        const response = await fetch(url, options);
        const data = response.json();
        return data;
    }

    static async fiveDayMap(forecast) {
        console.log(forecast)
        const fiveDayArr = forecast.daily.slice(0, 5);
        const better5DayForecast = fiveDayArr.map((day) => {
            const betterObject = {
                avg_temp: day.temp.day,
                current_temp: forecast.current.temp,
                description: day.weather[0].main,
                temp_min: day.temp.min,
                temp_max: day.temp.max,
                wind_speed: day.wind_speed,
                humidity: day.humidity,
                day: day.dt,
            };
            return betterObject;
        });
        return better5DayForecast;
    }
}

export default Forecast;