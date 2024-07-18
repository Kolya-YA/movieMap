import express, { type Express, type Request, type Response } from "express";

// import cors from "cors";
// import config from "./utils/config.js";
// import connectDB from "./utils/mongo.js";

// import userRoutes from "./routes/userRoutes";
import searchRoutes from "./routes/searchRoutes";

// import errorHandler from "./middleware/errorHandler.js";
// import { requestLogger, unknownEndpoint } from "./utils/middleware.js";

const app: Express = express();
// connectDB();

// app.use(cors(config.corsOptions));
// app.use(express.json());
// app.use(requestLogger);

app.get("/api", (req: Request, res: Response) => {
    res.send("Hello World!");    
});

// app.use("/api/v1/users", userRoutes);    
app.use("/api/v1/search", searchRoutes);    

app.use("/api/v1/buff", (req: Request, res: Response) => {
    res.send("Hello MovAI!");    
});
app.use("/api/v1/movai", (req: Request, res: Response) => {
    res.send("Hello MovAI!");    
});

// app.use(errorHandler);
// app.use(unknownEndpoint);

export default app;
