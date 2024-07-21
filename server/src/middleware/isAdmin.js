import logger from "../utils/logger.js";

const isAdmin = (req, res, next) => {
	logger.info("isAdmin middleware called");
	if (req.userRole !== "admin") {
		return res.status(403).json({ error: "Admin access required" });
	}
	next();
};

export default isAdmin;
