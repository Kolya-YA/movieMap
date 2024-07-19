import type { Request, Response, NextFunction } from 'express';
import { tmdbApi } from '../../utils/axiosInstances';
import { TMDB_IMAGE_API, POSTER_SIZES } from '../../utils/config';

const getMovieDetails = async (req: Request, res: Response, next: NextFunction) => {
    const { movieId } = req.params;
    const fetchURL = `/movie/${movieId}?append_to_response=casts,videos`;

    try {
        const { data } = await tmdbApi.get(fetchURL);
        // shapeMovieDetails(data);
        // res.status(200).json(data);
        res.status(200).json(shapeMovieDetails(data));
    } catch (error) {
        next(error);
    }
};

export default getMovieDetails;
// https://api.themoviedb.org/3/movie/608201?append_to_response=casts

function shapeMovieDetails(movie: MovieDetails) {
    return {
        id: movie.id,
        title: movie.title,
        original_title: movie.original_title,
        release_date: movie.release_date.split('-')[0],
        poster_path: movie.poster_path ? `${TMDB_IMAGE_API}${POSTER_SIZES.w500px}${movie.poster_path}` : null,
        vote_average: Math.round(movie.vote_average * 10) / 10,
        vote_count: movie.vote_count,
        overview: movie.overview,
        genres_list: movie.genres.map((genre: Genre) => genre.name),
        casts: movie.casts.cast.slice(0, 5).map((actor: Actor) => ({
            id: actor.id,
            name: actor.name,
            character: actor.character
        })),
        directors: movie.casts.crew.filter((crew: Crew) => crew.job === 'Director').map((director: Crew) => ({
            id: director.id,
            name: director.name
        })),
        trailers: movie.videos.results.filter(((video: Video) => video.type === 'Trailer' && video.official && video.site === 'YouTube')).map((video: Video) => ({
            key: `https://youtu.be/${video.key}`,
            name: video.name,
            type: video.type,
        }))
    }
};

interface Actor {
    id: number
    name: string
    character: string
};

interface Crew {
    id: number,
    name: string,
    job: string
};

interface Genre {id: number, name: string};

interface Video {
    key: string,
    name: string,
    type: string,
    official: boolean,
    site: string,
};

interface MovieDetails {
    id: number;
    title: string;
    original_title: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    overview: string;
    genres: Genre[];
    casts: {"cast": Actor[], "crew": Crew[]};
    videos: {"results": Video[]};
};