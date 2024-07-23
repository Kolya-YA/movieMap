import { tmdbApi } from '../../utils/axiosInstances.js';
import movieListShaper from './movieListShaper.js';

const getSearchMovies = async (req, res, next) => {
    const { query, page } = req.query;
    const fetchURL = `/search/movie?query=${query}&page=${page || 1}&include_adult=false`;

    try {
        const { data } = await tmdbApi.get(fetchURL);
        // res.status(200).json(data);
        res.status(200).json(movieListShaper(data));
    } catch (error) {
        next(error);
    }
};

export default getSearchMovies;

// https://api.themoviedb.org/3/search/movie?language=en-US&query=${query}&page=${page}&include_adult=false
