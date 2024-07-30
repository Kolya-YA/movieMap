import Movie from "../../models/movie.js";
import fetchMovieFromTmdb from "../../utils/fetchMovieFromTmdb.js";

const getMovieByTmdbId = async (req, res, next) => {
	const { movieId } = req.params;

	try {
		let movie = await Movie.findOne({ tmdb_id: movieId });

		if (!movie) {
			console.log(`Call TMDB API for ${movieId}`);

			const externalMovie = await fetchMovieFromTmdb(movieId);
			movie = new Movie(externalMovie);
		}

		movie.req_count += 1;
		await movie.save();
		res.status(200).json(movie);
	} catch (error) {
		next(error);
	}
};

export default getMovieByTmdbId;
