const PORT = process.env.PORT || 3001;

const TMDB_AUTH_TOKEN = process.env.TMDB_AUTH_TOKEN;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_URL = process.env.TMDB_API;
const TMDB_IMAGE_API = process.env.TMDB_IMAGE_API;
const TMDB_IMAGE_API_THAMNAIL = `${TMDB_IMAGE_API}92`;

// const MONGODB_URI = process.env.MONGODB_URI;
// const JWT_SECRET = process.env.JWT_SECRET;

// const corsOptions = {
    // 	origin: process.env.ORIGINS.split(", "),
    // };
    

export { PORT, TMDB_URL, TMDB_AUTH_TOKEN, TMDB_IMAGE_API, TMDB_API_KEY, TMDB_IMAGE_API_THAMNAIL };