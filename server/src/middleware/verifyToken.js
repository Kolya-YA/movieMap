import jwt from "jsonwebtoken";
import logger from "../utils/logger.js";
import { JWT_SECRET } from "../utils/config.js";

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader?.startsWith("Bearer ")) {
		return res.status(403).json({ error: "Token is missing or malformed" });
	}

	const token = authHeader.replace("Bearer ", "");

	try {
		const decodedToken = jwt.verify(token, JWT_SECRET);
		// logger.info("Token verified: ", decodedToken);
		req.userId = decodedToken.id;
		req.userRole = decodedToken.isAdmin ? "admin" : undefined;

		next();
	} catch (error) {
		logger.error("Token verification failed: ", error);
		res.status(403).json({ error: "Unauthorized" });
	}
};

export default verifyToken;
