import { tmdbApi } from "./axiosInstances.js";

const fetchMovieFromTmdb = async (movieId) => {
	const fetchURL = `/movie/${movieId}?append_to_response=casts,videos`;

	const { data } = await tmdbApi.get(fetchURL);
	return shapeMovieDetails(data);
};

export default fetchMovieFromTmdb;

function shapeMovieDetails(movie) {
	return {
		tmdb_id: movie.id,
		title: movie.title,
		original_title: movie.original_title,
		runtime: movie.runtime,
		release_date: movie.release_date,
		poster_path: movie.poster_path,
		vote_average: Math.round(movie.vote_average * 10) / 10,
		vote_count: movie.vote_count,
		overview: movie.overview,
		genres_list: movie.genres,
		cast: movie.casts.cast.map((actor) => ({
			tmdb_id: actor.id,
			name: actor.name,
			character: actor.character,
			order: actor.order,
			profile_path: actor.profile_path,
		})),
		crew: movie.casts.crew
			.filter((crew) => crew.job === "Director")
			.map((crewMember) => ({
				tmdb_id: crewMember.id,
				name: crewMember.name,
				job: crewMember.job,
				profile_path: crewMember.profile_path,
			})),
		trailers: movie.videos.results
			.filter(
				(video) =>
					video.type === "Trailer" &&
					video.official &&
					video.site === "YouTube",
			)
			.map((video) => ({
				url: `https://youtu.be/${video.key}`,
				name: video.name,
			})),
	};
}
