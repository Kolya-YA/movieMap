import { Link } from 'react-router-dom';
import { useUserContext } from '../hooks';
import { StarRating, FormatNumber } from '../components';
import { FormattedDate } from '../components';

const UserMovieList = ({ type }) => {
    const { user } = useUserContext();

    if (!user) return <h1>Please login to see this page</h1>;
    const listToShow = user?.movieList.filter(m => !!m.dateOfWatch === (type === 'history'));
    console.log(listToShow);

    return (
        <div className="text-main-text flex flex-col h-screen">
            <h1 className="text-2xl font-semibold text-center pb-2">{type} list</h1>
            <div className="flex-grow overflow-auto custom-scrollbar">
                <div className="card-list p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {listToShow.map(m => (
                            <MovieCard movie={m} key={m.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserMovieList;

function MovieCard({ movie }) {
    return (
        <Link to={`/movie/${movie.tmdbMovieId}`} className="text-white font-playfair px-4 cursor-pointer ">
            <div className="grid grid-cols-[92px_1fr] items-center  gap-2 bg-gray-500/50 text-inherit rounded-xl overflow-hidden shadow-[3px_-4px_10px_-3px_#000]">
                <img
                    className="w-[92px] aspect-[2/3]"
                    src={`https://image.tmdb.org/t/p/w92${movie.movie.poster_path}`}
                    alt={`${movie.movie.title} poster`}
                    loading="lazy"
                />
                <div className="grid px-2 py-1">
                    <h3 className="font-bold line-clamp-1 ">{movie.movie.title}</h3>
                    <p className="text-sm flex gap-2 line-clamp-1">
                        <span className="font-semibold">{movie.movie.release_date?.split('-')[0]}</span>
                        <span className="line-clamp-1">{movie.movie.genres_list?.map(g => g.name).join(', ')}</span>
                    </p>
                    <>
                        {movie.dateOfWatch ? (
                            <>
                                <div className="flex gap-2 text-sm items-center ">
                                    <StarRating rating={movie.rating} />
                                </div>
                                <p className="text-sm mt-4">
                                    Watched at <FormattedDate isoDate={movie.dateOfWatch} />
                                </p>
                            </>
                        ) : (
                            <>
                                <div className="flex gap-2 text-sm items-center ">
                                    <StarRating rating={movie.movie?.vote_average} />
                                    (<FormatNumber number={movie.movie?.vote_count} />)
                                </div>
                                <p className="text-sm mt-4">
                                    Added at <FormattedDate isoDate={movie.dateOfAdded} />
                                </p>
                            </>
                        )}
                    </>
                </div>
            </div>
        </Link>
    );
}
