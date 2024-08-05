const PORT = process.env.PORT || 3001;

const TMDB_AUTH_TOKEN = process.env.TMDB_AUTH_TOKEN;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_URL = process.env.TMDB_API;
const TMDB_IMAGE_API = process.env.TMDB_IMAGE_API;

const MONGODB_URI = process.env.MONGODB_URI;

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = 3 * 60 * 60; // 3 hours

const POSTER_SIZES = {
	w92px: "w92",
	w154px: "w154",
	w185px: "w185",
	w342px: "w342",
	w500px: "w500",
	w780px: "w780",
	original: "original",
};

const DAILY_CACHE_DURATION = 24 * 60 * 60; // 24 hours

const AI_REQ_DAILY_LIMIT = 3;
const AI_REQ_MOVIES_PER_REQ = 5;

const CORS_OPTIONS = {
	// origin: process.env.ORIGINS.split(", "),
};

export {
	PORT,
	TMDB_URL,
	TMDB_AUTH_TOKEN,
	TMDB_IMAGE_API,
	TMDB_API_KEY,
	MONGODB_URI,
	JWT_SECRET,
	JWT_EXPIRATION,
	POSTER_SIZES,
	DAILY_CACHE_DURATION,
	AI_REQ_DAILY_LIMIT,
	AI_REQ_MOVIES_PER_REQ,
	CORS_OPTIONS,
};
