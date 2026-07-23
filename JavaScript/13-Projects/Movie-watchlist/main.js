import { v4 as uuidv4 } from "https://jspm.dev/uuid";

/* ------ Constants ------ */

const API_KEY = "938c6bc8";
const STORAGE_KEY = "moviesList";

/* ------ State ----- */

const movieWatchlist = [];
console.log(movieWatchlist);

/* ------ DOM Elements ------ */

const watchlistMovies = document.getElementById("watchlist-movies");
const searchInput = document.getElementById("search-input");

/* ------ Helper Functions ------ */

async function getMoviesList(searchTerm) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`,
  );
  return response.json();
}

async function getMovies(id) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=short`,
  );
  return response.json();
}

async function getWatchList(searchTerm) {
  const moviesList = await getMoviesList(searchTerm);
  moviesList.Search.forEach(async (movie) => {
    const movieInfo = await getMovies(movie.imdbID);
    const { Poster, Title, imdbRating, Runtime, Genre, Plot } = movieInfo;
    movieWatchlist.push({
      Poster,
      Title,
      imdbRating,
      Runtime,
      Genre,
      Plot,
    });
    renderMovieslist();
  });
}

function loadMovies() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || movieWatchlist;
}

function saveMovies() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movieWatchlist));
}

function findMovie(id) {
  return movieWatchlist.find((movie) => movie.uuid === id);
}

/* ------ Event Listener ------ */
document.addEventListener("click", (e) => {
  if (e.target.id === "search-button") {
    handleSearchBtnClick();
  }
  if (e.target.id === "watchlist-button") {
    handleWatchlistBtnClick();
  }
});

/* ------ Event Handlers ------ */

function handleSearchBtnClick() {
  if (searchInput.value) {
    getWatchList(searchInput.value);
    movieWatchlist.length = 0;
  }
  searchInput.value = "";
}

function handleWatchlistBtnClick() {
  console.log("Clicked!");
}

/* ------ HTML ------ */
function getMoviesHTML(movie) {
  return `
      <div class="watchlist-movie">
        <div class="movie-img">
          <img src="${movie.Poster}" alt="${movie.Title}" />
        </div>
        <div class="movie-info">
          <div class="movie-info-header">
            <h2>${movie.Title}</h2>
            <div class="movie-rating">
              <i class="fa-solid fa-star star-color"></i>
              <p>${movie.imdbRating}</p>
            </div>
          </div>
          <div class="movie-info-body">
            <p>${movie.Runtime}</p>
            <p>${movie.Genre}</p>
            <button class="watchlist-button" id="watchlist-button">
              <i class="fa-solid fa-circle-plus"></i>
              Watchlist
            </button>
          </div>
          <div class="movie-info-footer">
            <p>${movie.Plot}</p>
          </div>
        </div>
      </div>
    `;
}

function getFeedHtml() {
  return movieWatchlist.map((movie) => getMoviesHTML(movie)).join("");
}
/* ------ Render ------ */

function renderMovieslist() {
  watchlistMovies.innerHTML = getFeedHtml();
}

renderMovieslist();
