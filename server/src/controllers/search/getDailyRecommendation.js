import { tmdbApi } from "../../utils/axiosInstances.js";
import movieListShaper from "./movieListShaper.js";

const getDailyRecommendations = async (req, res, next) => {
	const { location: region } = req.query;
	const sources = {
		"Top rated": "/movie/top_rated",
		"Popular": "/movie/popular",
		"Now playing": "/movie/now_playing",
		"Upcoming": "/movie/upcoming",
	};

	try {
		const promises = Object.entries(sources).map(async ([name, url]) => {
			const { data } = await tmdbApi.get(`${url}?region=${region || "DE"}`);
			return { [name]: movieListShaper(data) };
		});
		const data = await Promise.all(promises);
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

export default getDailyRecommendations;
