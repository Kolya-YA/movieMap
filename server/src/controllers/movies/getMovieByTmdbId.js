import Movie from "../../models/movie.js";
import fetchMovieFromTmdb from "../../utils/fetchMovieFromTmdb.js";

const getMovieByTmdbId = async (req, res, next) => {
	const { movieId } = req.params;

	try {
		let movie = await Movie.findOneAndUpdate(
			{ tmdb_id: movieId },
			{ $inc: { req_count: 1 } },
			{ new: true, upsert: false },
		);

		if (!movie) {
			console.log(`Call TMDB API for ${movieId}`);
			const externalMovie = await fetchMovieFromTmdb(movieId);
			const movieData = new Movie(externalMovie);


			movie = await Movie.findOneAndUpdate(
				{ tmdb_id: movieId },
				{ $setOnInsert: movieData },
				{ upsert: true, new: true },
			);
		}

		res.status(200).json(movie);
	} catch (error) {
		next(error);
	}
};

export default getMovieByTmdbId;
