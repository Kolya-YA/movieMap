import express from "express";
import cors from "cors";
import { CORS_OPTIONS } from "./utils/config.js";
import connectDB from "./utils/database.js";

import searchRoutes from "./routes/searchRoutes.js";
import detailsRoutes from "./routes/detailsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import configRoutes from "./routes/configRoutes.js";

import errorHandler from "./middleware/errorHandler.js";
// import { requestLogger, unknownEndpoint } from "./utils/middleware.js";

const app = express();
await connectDB();

app.use(cors(CORS_OPTIONS));
app.use(express.json());
// app.use(requestLogger);

app.use("/api/v1/search", searchRoutes);
app.use("/api/v1/details", detailsRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/config", configRoutes);

app.use((_req, res) => {
	res.status(404).send({ error: "Unknown endpoint" });
});

app.use(errorHandler);

export default app;
