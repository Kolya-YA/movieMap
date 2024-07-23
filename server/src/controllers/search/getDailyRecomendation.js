import { tmdbApi } from "../../utils/axiosInstances.js";
import movieListShaper from "./movieListShaper.js";

const getDailyRecomendations = async (req, res, next) => {
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
			return { title: name, list: movieListShaper(data) };
		});
		const data = await Promise.all(promises);
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

export default getDailyRecomendations;

// https://api.themoviedb.org/3/search/movie?language=en-US&query=${query}&page=${page}&include_adult=false
