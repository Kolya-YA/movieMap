import express from "express";

import getMovieByTmdbId from "../controllers/movies/getMovieByTmdbId.js";

const detailsRoutes = express.Router();

detailsRoutes.get("/movie/:movieId", getMovieByTmdbId);

export default detailsRoutes;
