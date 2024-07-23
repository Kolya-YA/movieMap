import express from "express";

import getSearchMovies from "../controllers/search/getSearchMovies.js";
import getDailyRecommendations from "../controllers/search/getDailyRecommendation.js";
import cacheMiddleware from "../middleware/cacheMiddleware.js";

const searchRoutes = express.Router();

searchRoutes.get("/movies", getSearchMovies);
searchRoutes.get("/daily", cacheMiddleware, getDailyRecommendations);

export default searchRoutes;
