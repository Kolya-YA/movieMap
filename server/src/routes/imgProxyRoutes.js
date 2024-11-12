import express from "express";

import getImgProxy from "../controllers/imgProxy/getImgProxy.js";

const imgProxyRoutes = express.Router();

imgProxyRoutes.get("/:width/:filename", getImgProxy);

export default imgProxyRoutes;
