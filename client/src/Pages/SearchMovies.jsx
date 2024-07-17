import axios from 'axios';
import { useEffect, useState } from 'react';
const TMDP_API_KEY = import.meta.env.VITE_TMDP_API_KEY;

const SearchMovies = () => {
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const searchMovies = async () => {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDP_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

            try {
                const { data } = await axios.get(url);
                console.log(data)
                setMovies(data);
            } catch (err) {
                console.error(err);
            }
        };
        searchMovies()
    }, [page, query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(input)
    }

    const MovieCard = ({ movie }) => {
        return (
            <div className="flex items-center gap-4 mb-4 bg-slate-100">
                <img
                    width="4rem"
                    className="w-16"
                    src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                    loading="lazy"
                />
                <div>
                    <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                    <p className="text-sm">RELEASE DATE: {movie.release_date}</p>
                    <p className="text-sm">RATING: {movie.vote_average}</p>
                    <p className="text-gray-700">{movie.overview}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <form className="bg-slate-100" onSubmit={handleSubmit}>
                <label htmlFor="query" className="label">
                    Enter movie name
                </label>
                <input
                    type="text"
                    name="query"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="i.e. Jurassic Park"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="bg-slate-800 text-white p-2">
                    Search
                </button>
            </form>
            <div className="card-list">
                <p className="text-gray-700">
                    Total results: {movies?.total_results}. Page {movies?.page} of {movies?.total_pages}.
                </p>
                <div className="flex justify-center items-center gap-8 mt-4">
                    {page > 1 && (
                        <button
                            type="button"
                            onClick={() => setPage((prev) => prev - 1)}
                            className="bg-slate-800 text-white p-2 mr-2"
                        >
                            prev
                        </button>
                    )}
                    {page < movies?.total_pages && (
                        <button
                            type="button"
                            onClick={() => setPage((prev) => prev + 1)}
                            className="bg-slate-800 text-white p-2"
                        >
                            next
                        </button>
                    )}
                </div>
                {movies?.results
                    .filter((movie) => movie.poster_path)
                    .map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
            </div>
        </>
    );
}

export default SearchMovies;