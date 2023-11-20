import {NETFLIX_TITLES} from "./data/netflix-titles.js";

(() => {
    console.log(NETFLIX_TITLES);
    // THE FILTER METHOD
    // const scifiTitles = [];
    // for (let title of NETFLIX_TITLES) {
    // 	if (title.listed_in.includes("Sci-Fi")) {
    // 		scifiTitles.push(title);
    // 	}
    // }
    // const scifiTitles = NETFLIX_TITLES.filter((title) => {
    // 	if (!title.listed_in) {
    // 		return false;
    // 	}
    // 	return title.listed_in.includes("Sci-Fi");
    // });
    // console.log(scifiTitles);

    // THE FIND METHOD
    // const theNextGeneration = NETFLIX_TITLES.find((movie) => {
    // 	return movie.title.toLowerCase() === "Star Trek: The Next Generation".toLowerCase();
    // });
    // console.log(theNextGeneration);

    // // THE SOME METHOD
    // const hasStarTrek = NETFLIX_TITLES.some((movie) => {
    // 	return movie.title.toLowerCase().includes("star trek") && movie.type.toLowerCase() === "movie";
    // });
    // if (hasStarTrek) {
    // 	console.log("It has star trek movies, but star wars is better.");
    // }

    // THE MAP METHOD
    const betterNetflixTitles = NETFLIX_TITLES.map((movie, index) => {
        const betterObject = {
            id: index + 1,
            title: movie.title,
            type: movie.type,
            director: movie.director?.split(", "),
            cast: movie.cast?.split(", "),
            date_added: movie.date_added,
            release_year: movie.release_year,
            rating: movie.rating,
            duration: movie.duration,
            categories: movie.listed_in?.split(", "),
            description: movie.description,
        };
        return betterObject;
    });
    // console.log(betterNetflixTitles);

    // THE REDUCE METHOD
    // How many action movies did Sylvester Stallone star in?
    const actionStalloneMovies = betterNetflixTitles.reduce((accumulator, movie) => {
        if (movie.categories?.includes("Action & Adventure") && movie.cast?.includes("Sylvester Stallone")) {
            return `${movie.title}, ${accumulator}`;
        } else {
            return accumulator;
        }
    }, "");
    console.log(actionStalloneMovies);
})();