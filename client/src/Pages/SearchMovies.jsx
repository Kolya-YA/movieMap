import axios from 'axios';
import { useEffect, useState, useCallback, useRef } from 'react';
import { FormatNumber, StarRating, Button } from '../components';
import { Link } from 'react-router-dom';

const limit_Page = 10;

const SearchMovies = () => {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const containerRef = useRef(null);

    const searchMovies = useCallback(async () => {
        if (!query) return;

        setLoading(true);
        const url = `/api/v1/search/movies?query=${query}&page=${page}`;

        try {
            const { data } = await axios.get(url);
            setMovies(prevMovies => {
                if (prevMovies && page > 1) {
                    return {
                        ...data,
                        results: [...prevMovies.results, ...data.results],
                    };
                }
                return data;
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [query, page]);

    useEffect(() => {
        searchMovies();
    }, [searchMovies]);

    useEffect(() => {
        const container = containerRef.current;
        const handleScroll = () => {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight - 100) {
                if (!loading && movies && movies.results.length < movies.total_results && page < limit_Page)
                    setPage(prevPage => prevPage + 1);
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [loading, movies]);

    return (
        <div className="text-white flex flex-col h-screen">
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 12px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    color: #ffffff;
                    border-radius: 20px;
                    border: 5px solid #ffffff;
                }
            `}</style>
            <div className="mt-5 mb-3 px-8">
                <div className="flex items-center gap-4">
                    <SearchMovieForm setPage={setPage} setQuery={setQuery} />
                </div>
                <p className="mt-1">Total results: {movies?.total_results}</p>
            </div>

            <div ref={containerRef} className="flex-grow overflow-auto custom-scrollbar">
                <div className="card-list p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {movies?.results
                            ?.filter(movie => movie.poster_path)
                            .map((movie, index) => (
                                <MovieCard movie={movie} key={index} />
                            ))}
                    </div>
                    {loading && <p className="text-center py-4">Loading more movies...</p>}
                </div>
            </div>
        </div>
    );
};

export default SearchMovies;

function SearchMovieForm({ setPage, setQuery }) {
    const [input, setInput] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        setPage(1);
        setQuery(input);
    };

    return (
        <form className="flex items-center gap-4" onSubmit={handleSubmit}>
            <input
                type="text"
                name="query"
                className="border border-gray-300 rounded-md border-white-hover-gray p-2"
                placeholder="i.e. Jurassic Park"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <Button text="Search"></Button>
        </form>
    );
}

function MovieCard({ movie }) {
    return (
        <Link to={`../movie/${movie.id}`} className="h-40 text-white mb-4 px-4">
            <div className="flex h-40 items-center rounded-xl gap-4 mb-4 px-4 bg-opacity-50 bg-gray-500">
                <img
                    width="4rem"
                    height="10rem"
                    className="w-16"
                    src={movie.poster_path}
                    alt={`${movie.title} poster`}
                    loading="lazy"
                />
                <div>
                    <h3 className="font-bold line-clamp-1 ">{movie.title}</h3>
                    <p className="text-sm flex gap-2 line-clamp-1">
                        <span className="font-semibold">{movie.release_date.split('-')[0]}</span>
                        <span className="line-clamp-1">{movie.genres_list.join(', ')}</span>
                    </p>
                    <div className="flex gap-2 text-sm ">
                        <StarRating rating={movie.vote_average} />
                        (<FormatNumber number={movie.vote_count} />)
                    </div>
                    <p className="text-sm line-clamp-3">{movie.overview}</p>
                </div>
            </div>
        </Link>
    );
}
