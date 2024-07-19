import express from "express";

import getMovieDetails from "../controllers/details/getMovieDetails";

const detailsRoutes = express.Router();

detailsRoutes.get("/movie/:movieId", getMovieDetails);

export default detailsRoutes;
