import type { Request, Response, NextFunction } from "express";

// import jwt from "jsonwebtoken";
// import config from "../utils/config.js";

import logger from "../utils/logger";

export default (req: Request, _res: Response, next: NextFunction) => {
	logger.info("Auth middleware called");
	// const authHeader = req.get("authorization");
	const authHeader: string | undefined = req.headers.authorization;

	if (!authHeader?.startsWith("Bearer ")) {
        return next();
        // return next(new Error("Token is missing or malformed"));
    }
    
    const token = authHeader.replace("Bearer ", "");
    logger.info("Token: ", token);
	try {
		// const decodedToken = jwt.verify(token, config.JWT_SECRET);
		// req.fighter = decodedToken;
		next();
	} catch (error) {
		next(error);
	}
};
