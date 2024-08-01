import axios from 'axios';
import { useEffect, useState, useCallback, useRef } from 'react';
import { SearchComponent, LandscapeCard } from '../components/FormComponents';

const limit_Page = 10;

const SearchMovies = () => {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const containerRef = useRef(null);

    const [input, setInput] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        setPage(1);
        setQuery(input);
    };

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
            <style jsx="true">{`
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
                <div className="flex items-center flex-col">
                    <div className="flex items-center">
                        <SearchComponent
                            input={input}
                            setInput={setInput}
                            handleSubmit={handleSubmit}
                            placeholder="e.g Jurassic World"
                        />
                    </div>
                    <p className="mt-1">Total results: {movies?.total_results}</p>
                </div>
            </div>

            <div ref={containerRef} className="flex-grow overflow-auto custom-scrollbar">
                <div className="card-list p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 align-middle items-center gap-4">
                        {movies?.results
                            ?.filter(movie => movie.poster_path)
                            .map((movie, index) => (
                                <LandscapeCard movie={movie} key={index} />
                            ))}
                    </div>
                    {loading ? (
                        <p className="text-center py-4">Loading more movies...</p>
                    ) : (
                        <p className="text-center py-4">All data has been loaded</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchMovies;
