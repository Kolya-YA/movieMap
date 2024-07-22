import express from "express";

import getSearchMovies from "../controllers/search/getSearchMovies.js";

const searchRoutes = express.Router();

searchRoutes.get("/movies", getSearchMovies);

export default searchRoutes;
