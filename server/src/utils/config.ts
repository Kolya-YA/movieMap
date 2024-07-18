const PORT = process.env.PORT || 3001;
const TMDB_URL = process.env.TMDB_URL;
const TMDB_AUTH_TOKEN = process.env.TMDB_AUTH_TOKEN;
const TMDB_IMG_URL = process.env.TMDB_IMG_URL;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// const MONGODB_URI = process.env.MONGODB_URI;
// const JWT_SECRET = process.env.JWT_SECRET;

// const corsOptions = {
// 	origin: process.env.ORIGINS.split(", "),
// };

// export default { PORT, MONGODB_URI, JWT_SECRET, corsOptions };
export { PORT, TMDB_URL, TMDB_AUTH_TOKEN, TMDB_IMG_URL, TMDB_API_KEY };