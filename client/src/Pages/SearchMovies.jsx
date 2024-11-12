import axios from 'axios';
import { useEffect, useState, useCallback, useRef } from 'react';
import { FormatNumber, StarRating, Button } from '../components';
import { useSearchParams, Link } from 'react-router-dom';

const limit_Page = 10;

const SearchMovies = () => {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query'));
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const containerRef = useRef(null);

    const searchMovies = useCallback(async () => {
        if (!query) return;

        setLoading(true);
        setHasSearched(true);
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
    }, [loading, movies, page]);

    return (
        <div className="text-main-text flex flex-col h-screen">
            <style>{`
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
                <div className="flex justify-center">
                    <SearchMovieForm setPage={setPage} setQuery={setQuery} setHasSearched={setHasSearched} />
                </div>
                {hasSearched && <p className="mt-1">Total results: {movies?.total_results}</p>}
            </div>

            <div ref={containerRef} className="flex-grow overflow-auto custom-scrollbar">
                <div className="card-list p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {movies?.results
                            ?.filter(movie => movie.poster_path)
                            .map((movie) => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                    </div>
                    {hasSearched &&
                        (loading ? (
                            <p className="text-center py-4">Loading more movies...</p>
                        ) : movies && movies.results.length > 0 ? (
                            <p className="text-center py-4">All data has been loaded</p>
                        ) : (
                            <p className="text-center py-4">No movies found</p>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default SearchMovies;

function SearchMovieForm({ setPage, setQuery, setHasSearched }) {
    const inputRef = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [input, setInput] = useState(searchParams.get('query') || '');

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({ query: input });
        setPage(1);
        setQuery(input);
        setHasSearched(true);
    };

    return (
        <form className="flex gap-4 max-w-lg" onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                name="query"
                className="border border-gray-300 rounded-md border-white-hover-gray p-2"
                placeholder="i.e. Jurassic Park"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <Button text="Search" />
        </form>
    );
}

function MovieCard({ movie }) {
    return (
        <Link
            to={`../movie/${movie.id}`}
            className="grid grid-cols-[92px_1fr] items-center  gap-2 bg-gray-500/50 text-inherit rounded-xl overflow-hidden"
        >
            <img
                className="w-[92px] aspect-[2/3]"
                src={`/api/v1/img/w92${movie.poster_path}`}
                alt={`${movie.title} poster`}
                loading="lazy"
            />
            <div className="px-2 py-1">
                <h3 className="font-bold line-clamp-1 ">{movie.title}</h3>
                <p className="text-sm flex gap-2 line-clamp-1">
                    <span className="font-semibold">{movie.release_date?.split('-')[0]}</span>
                    <span className="line-clamp-1">{movie.genres_list?.join(', ')}</span>
                </p>
                <div className="flex gap-2 text-sm ">
                    <StarRating rating={movie.vote_average} />
                    (<FormatNumber number={movie.vote_count} />)
                </div>
                <p className="text-sm line-clamp-3">{movie.overview}</p>
            </div>
        </Link>
    );
}
