import express from "express";

import getSearchMovies from "../controllers/search/getSearchMovies.js";
import getDailyRecomendations from "../controllers/search/getDailyRecomendation.js";
import cacheMiddleware from "../middleware/cacheMiddleware.js";

const searchRoutes = express.Router();

searchRoutes.get("/movies", getSearchMovies);
searchRoutes.get("/daily", cacheMiddleware, getDailyRecomendations);

export default searchRoutes;
