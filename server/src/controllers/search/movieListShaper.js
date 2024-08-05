import genresList from "../../utils/genresList.js";

const shapeMovieList = (movies) => {
	return {
		page: movies.page,
		total_pages: movies.total_pages,
		total_results: movies.total_results,
		results: movies.results.map((movie) => ({
			id: movie.id,
			genres_list: movie.genre_ids?.map((id) => genresList[id]),
			title: movie.title,
			original_title: movie.original_title,
			overview: movie.overview,
			release_date: movie.release_date,
			poster_path: movie.poster_path,
			vote_average: Math.round(movie.vote_average * 10) / 10,
			vote_count: movie.vote_count,
		})),
	};
};

export default shapeMovieList;