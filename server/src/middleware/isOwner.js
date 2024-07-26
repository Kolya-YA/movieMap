import logger from "../utils/logger.js";

const isOwner = (req, res, next) => {
	logger.info("isOwner middleware called");
	if (req.userId !== req.body?.id) {
		return res.status(403).json({ error: "Owner access required" });
	}
	next();
};

export default isOwner;
