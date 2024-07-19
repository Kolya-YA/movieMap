
import logger from "../utils/logger.js";

export default (req, res, next) => {
	logger.info("isAdmin middleware called");

	next();
};
