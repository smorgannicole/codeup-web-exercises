(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
planetsArray = planetsString.split("|");
    //console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
let backToString = planetsArray.join("<br>");
//console.log(backToString)
//useful bc you could be inserting HTML into the dom as a string


let planetsHTML = planetsArray.join(`</li><li>`);
planetsHTML = `<ul><li>${planetsHTML}</li></ul>`;


console.log(planetsHTML);
})();
