import { v4 as uuidv4 } from "https://jspm.dev/uuid";

/* ------ Constants ------ */

const API_KEY = "938c6bc8";

/* ------ State ----- */

const requestBySearch = async (searchTerm) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`,
  );
  return response.json();
};

const requestById = async (id) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=short`,
  );
  return response.json();
};

const movieWatchlist = [];
console.log(movieWatchlist);

/* ------ DOM Elements ------ */

/* ------ Helper Functions ------ */

async function getMovieData(searchTerm) {
  const data = await requestBySearch(searchTerm);
  data.Search.forEach(async (movie) => {
    const movieData = await requestById(movie.imdbID);
    movieWatchlist.push(movieData);
  });
}

/* ------ Event Listener ------ */

/* ------ Event Handlers ------ */

/* ------ HTML ------ */

/* ------ Render ------ */

getMovieData("Blade Runner");
