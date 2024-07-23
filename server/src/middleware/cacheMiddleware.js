import { DAILY_CACHE_DURATION } from "../utils/config.js";
import logger from "../utils/logger.js";

const cache = new Map();

const cacheMiddleware = (req, res, next) => {
	const key = req.originalUrl;
	const cachedData = cache.get(key);
    
	if (cachedData) {
		const { timestamp, data } = cachedData;
		if (Date.now() - timestamp < DAILY_CACHE_DURATION) {
            logger.info(`Cache HIT for ${key}`);
			return res.json(data);
		}
		cache.delete(key);
	}

	res.orgiginalJson = res.json;
	res.json = (data) => {
		cache.set(key, { data, timestamp: Date.now() });
        logger.info(`Cache MISS for ${key}`);
		res.orgiginalJson(data);
	};
	next();
};

export default cacheMiddleware;
