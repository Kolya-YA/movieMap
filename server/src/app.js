import express from "express";

// import cors from "cors";
// import config from "./utils/config.js";
import connectDB from "./utils/database.js";

import searchRoutes from "./routes/searchRoutes.js";
import detailsRoutes from "./routes/detailsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import configRoutes from "./routes/configRoutes.js";

// import errorHandler from "./middleware/errorHandler.js";
// import { requestLogger, unknownEndpoint } from "./utils/middleware.js";

const app = express();
await connectDB();

// app.use(cors(config.corsOptions));
app.use(express.json());
// app.use(requestLogger);

app.get("/api", (req, res) => {
    res.send("Hello, I'm Movie Map server!");    
});

app.use("/api/v1/search", searchRoutes);
app.use("/api/v1/details",detailsRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/config", configRoutes);

// app.use(errorHandler);
app.use((_req, res) => {
	res.status(404).send({ error: "Unknown endpoint" });
});

export default app;
