import { tmdbApi } from "../axiosInstances.js";

const aiListToMovies = async (aiAdvise) => {
	const promises = aiAdvise.map(async (movie) => {
		const fetchURL = `/search/movie?query=${movie}&page=1&include_adult=false`;
		const { data } = await tmdbApi.get(fetchURL);
		// console.log("movie", data);
		return shapeMovieData(data);
	});
	
	return await Promise.all(promises);
};

export default aiListToMovies;

function shapeMovieData(data) {
	const movie = data?.results[0];
	if (!movie) return null;
	return {
		tmdbMovieId: movie.id,
		title: movie.title,
		release_date: movie.release_date,
		poster_path: movie.poster_path,
		vote_average: Math.round(movie.vote_average * 10) / 10,
		vote_count: movie.vote_count,
	};
}
