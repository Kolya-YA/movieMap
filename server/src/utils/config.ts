const PORT = process.env.PORT || 3001;

const TMDB_AUTH_TOKEN = process.env.TMDB_AUTH_TOKEN;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_URL = process.env.TMDB_API;
const TMDB_IMAGE_API = process.env.TMDB_IMAGE_API;

const POSTER_SIZES = {
    w92px: "w92",
    w154px: "w154",
    w185px: "w185",
    w342px: "w342",
    w500px: "w500",
    w780px: "w780",
    original: "original",
};

// const MONGODB_URI = process.env.MONGODB_URI;
// const JWT_SECRET = process.env.JWT_SECRET;

// const corsOptions = {
    // 	origin: process.env.ORIGINS.split(", "),
    // };
    

export { PORT, TMDB_URL, TMDB_AUTH_TOKEN, TMDB_IMAGE_API, TMDB_API_KEY, POSTER_SIZES};