import {getUserData} from "./fetch.api.js";

(async () => {
    const list = getUserData();
    console.log(list);
})();