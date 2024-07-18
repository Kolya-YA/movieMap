import axios from 'axios';
import { useEffect, useState } from 'react';

const SearchMovies = () => {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const searchMovies = async () => {
            const url = `/api/v1/search/movies?query=${query}&page=${page}`;

            try {
                const { data } = await axios.get(url);
                console.log(data)
                setMovies(data);
            } catch (err) {
                console.error(err);
            }
        };
        searchMovies();
    }, [page, query]);
    
    return (
        <>
            <SearchMovieForm setPage={setPage} setQuery={setQuery}/>
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
                    ?.filter((movie) => movie.poster_path)
                    .map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
            </div>
        </>
    );
}

export default SearchMovies;

function SearchMovieForm({setPage, setQuery}) {

    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        setQuery(input);
    }

    return (
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
    )
}

function MovieCard({ movie }) {
    return (
        <div className="flex items-center gap-4 mb-4 bg-slate-100">
            <img
                width="4rem"
                className="w-16"
                src={movie.poster_path}
                alt={`${movie.title} poster`}
                loading="lazy"
            />
            <div>
                <h3 className="font-bold">{movie.title}</h3>
                <p className="text-gray-700 text-sm flex gap-2">
                    <span className="font-semibold">{movie.release_date.split('-')[0]}</span>
                <span>{movie.genres_list.join(', ')}</span>
                </p>
                <p  className="flex gap-2 text-sm text-gray-700">
                    <span className="font-semibold">{movie.vote_average}</span>
                    <span>({movie.vote_count})</span>
                </p>
                <p className="text-sm text-gray-700">{movie.overview}</p>
            </div>
        </div>
    );
}
