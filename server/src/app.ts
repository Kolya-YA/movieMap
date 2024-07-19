import express, { type Express, type Request, type Response } from "express";

// import cors from "cors";
// import config from "./utils/config.js";
// import connectDB from "./utils/mongo.js";

// import userRoutes from "./routes/userRoutes";
import searchRoutes from "./routes/searchRoutes";
import detailsRoutes from "./routes/detailsRoutes";

// import errorHandler from "./middleware/errorHandler.js";
// import { requestLogger, unknownEndpoint } from "./utils/middleware.js";

const app: Express = express();
// connectDB();

// app.use(cors(config.corsOptions));
// app.use(express.json());
// app.use(requestLogger);

app.get("/api", (req: Request, res: Response) => {
    res.send("Hello, I'm Movie Map!");    
});

app.use("/api/v1/search", searchRoutes);
app.use("/api/v1/details",detailsRoutes);
// app.use("/api/v1/users", userRoutes);    


// app.use(errorHandler);
// app.use(unknownEndpoint);

export default app;
