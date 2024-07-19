import type { Request, Response, NextFunction } from 'express';
import { tmdbApi } from '../../utils/axiosInstances';
import { TMDB_IMAGE_API, POSTER_SIZES } from '../../utils/config';
import genresList from '../../utils/genresList';

const getSearchMovies = async (req: Request, res: Response, next: NextFunction) => {
    const { query, page } = req.query;
    const fetchURL = `/search/movie?query=${query}&page=${page}`;

    try {
        const { data } = await tmdbApi.get(fetchURL);
        // res.status(200).json(data);
        res.status(200).json(shapeMovieList(data));
    } catch (error) {
        next(error);
    }
};

export default getSearchMovies;

// https://api.themoviedb.org/3/search/movie?language=en-US&query=${query}&page=${page}&include_adult=false

function shapeMovieList(movies: MovieList) {

    return {
    page: movies.page,
    total_pages: movies.total_pages,
    total_results: movies.total_results,
    results: movies.results.map((movie: Movie) => ({
        id: movie.id,
        genres_list: movie.genre_ids.map((id) => genresList[id]),
        title: movie.title,
        original_title: movie.original_title,
        overview: movie.overview,
        release_date: movie.release_date,
        poster_path: movie.poster_path ? `${TMDB_IMAGE_API}${POSTER_SIZES.w92px}${movie.poster_path}` : null,
        vote_average: Math.round(movie.vote_average * 10) / 10,
        vote_count: movie.vote_count,
    }))
    }
};

interface MovieList {
    page: number;
    total_pages: number;
    total_results: number;
    results: Movie[];

}

interface Movie {
    id: number;
    genre_ids: number[];
    title: string;
    original_title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}