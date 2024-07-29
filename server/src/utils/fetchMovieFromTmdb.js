import { tmdbApi } from '../../utils/axiosInstances.js';
import { TMDB_IMAGE_API, POSTER_SIZES } from '../../utils/config.js';

const fetchMovieFromTmdb = async (req, res, next) => {
    const { movieId } = req.params;
    const fetchURL = `/movie/${movieId}?append_to_response=casts,videos`;

    try {
        const { data } = await tmdbApi.get(fetchURL);
        // shapeMovieDetails(data);
        // res.status(200).json(data);
        // res.status(200).json(shapeMovieDetails(data));
        return shapeMovieDetails(data);
    } catch (error) {
        next(error);
    }
};

export default fetchMovieFromTmdb;

function shapeMovieDetails(movie) {
    return {
        id: movie.id,
        title: movie.title,
        original_title: movie.original_title,
        release_date: movie.release_date.split('-')[0],
        poster_path: movie.poster_path ? `${TMDB_IMAGE_API}${POSTER_SIZES.w500px}${movie.poster_path}` : null,
        vote_average: Math.round(movie.vote_average * 10) / 10,
        vote_count: movie.vote_count,
        overview: movie.overview,
        genres_list: movie.genres.map((genre) => genre.name),
        casts: movie.casts.cast.slice(0, 5).map((actor) => ({
            id: actor.id,
            name: actor.name,
            character: actor.character
        })),
        directors: movie.casts.crew.filter((crew) => crew.job === 'Director').map((director) => ({
            id: director.id,
            name: director.name
        })),
        trailers: movie.videos.results.filter(((video) => video.type === 'Trailer' && video.official && video.site === 'YouTube')).map((video) => ({
            url: `https://youtu.be/${video.key}`,
            name: video.name,
            type: video.type,
        }))
    }
};