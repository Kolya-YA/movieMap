import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { LuBookmark, LuBookmarkPlus, LuEye, LuEyeOff, LuYoutube } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { FormatNumber, StarRating, RatingCommentModal, Loading } from '../components';

const useMovieDetail = id => {
    const [detail, setDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDetail = useCallback(async () => {
        if (!id) return;

        const url = `/api/v1/details/movie/${id}`;
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(url);
            setDetail(response.data);
        } catch (error) {
            console.error('Failed to fetch movie details:', error);
            setError('Failed to load movie details.');
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchDetail();
    }, [fetchDetail]);

    return { detail, isLoading, error, refetch: fetchDetail };
};

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state => !state), []);
    return [state, toggle];
};

const Movie = () => {
    const { id } = useParams();
    const { detail, isLoading: isDataLoading, error } = useMovieDetail(id);

    const [isBookmarked, toggleBookmark] = useToggle(false);
    const [isWatchlisted, toggleWatchlist] = useToggle(false);
    const [isMore, toggleMore] = useToggle(false);

    const saveData = useCallback((state, type) => {
        console.log(`${type} state saved:`, state);
    }, []);

    const handleBookmark = useCallback(() => {
        toggleBookmark();
        saveData(!isBookmarked, 'Bookmark');
    }, [isBookmarked, toggleBookmark, saveData]);

    const handleWatchlist = useCallback(() => {
        toggleWatchlist();
        saveData(!isWatchlisted, 'Watchlist');
    }, [isWatchlisted, toggleWatchlist, saveData]);

    if (error) return <div className="text-white">{error}</div>;
    if (isDataLoading) return <Loading />;
    if (!detail) return <div>No data</div>;

    return (
        <div className=" text-white grid grid-rows-[1fr-auto] px-6 font-playfair">
            <div className="row-span-1 mt-5 col-start-1">
                <img
                    className="w-full rounded-lg h-auto"
                    src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
                    alt={detail.title}
                />
            </div>
            <div className="row-start-2 -mt-40 col-start-1 bg-black bg-opacity-70 p-4">
                <h1 className="text-3xl text-center font-semibold font-black-ops-one">{detail.title}</h1>
                <div className="flex justify-center">
                    <p className="mr-5 mb-2">{detail.release_date}</p>
                    {detail.genres_list && detail.genres_list.length > 0 && (
                        <p className="text-center">Genres: {detail.genres_list.join(', ')}</p>
                    )}
                </div>

                <div className="flex justify-center items-center mb-4">
                    <div>
                        <div className="flex text-2xl items-center mr-4">
                            <StarRating rating={detail.vote_average} />
                            <p className="text-sm ml-2">
                                <FormatNumber number={detail.vote_count} />
                            </p>
                        </div>
                        <div className="flex text-2xl items-center mr-4">
                            {/* Todo-Hw. it should be connected my own review */}
                            <StarRating rating={detail.vote_average} />
                            <RatingCommentModal />
                        </div>
                    </div>
                    <button onClick={handleBookmark} className="text-3xl mx-2 transition-colors focus:outline-none ">
                        {isBookmarked ? <LuBookmark /> : <LuBookmarkPlus />}
                    </button>
                    <button onClick={handleWatchlist} className="text-3xl">
                        {isWatchlisted ? <LuEyeOff /> : <LuEye />}
                    </button>
                </div>

                <p className="text-lg mb-4 line-clamp-4">{detail.overview}</p>
                <div className="flex justify-center mb-4">
                    <button className="w-52 h-10 border-white-hover-gray" onClick={toggleMore}>
                        {isMore ? 'Hide' : 'More information'}
                    </button>
                </div>
                {isMore && (
                    <div className="mt-4 mb-4">
                        {detail.casts && detail.casts.length > 0 && (
                            <div className="mb-2">
                                <p>Actors : {detail.casts.map(cast => cast.name).join(', ')}</p>
                            </div>
                        )}

                        {detail.directors && detail.directors.length > 0 && (
                            <div>
                                <p>Directors : {detail.directors.map(director => director.name).join(', ')}</p>
                            </div>
                        )}
                    </div>
                )}

                <div className="flex text-lg justify-center">
                    {detail.trailers && detail.trailers.length > 0 && (
                        <a
                            href={`${detail.trailers[0].url}`}
                            className="w-52 h-10 border-white-hover-gray flex justify-center items-center"
                        >
                            <LuYoutube className="mr-2 text-2xl" />
                            Trailer
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Movie;
