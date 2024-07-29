import express from "express";

import getMovieById from "../controllers/movies/getMovieById.js";

const detailsRoutes = express.Router();

detailsRoutes.get("/movie/:movieId", getMovieById);

export default detailsRoutes;
