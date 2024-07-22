import express from "express";

import countryList from "../utils/countryLIst.js";

const searchRoutes = express.Router();

searchRoutes.get("/countries", (_, res) => {
    res.json(countryList);
});

export default searchRoutes;
