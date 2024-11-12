import { Link } from 'react-router-dom';
import { useUserContext } from '../hooks';
import { StarRating, FormatNumber } from '../components';
import { FormattedDate } from '../components';

const UserMovieList = ({ type }) => {
    const { user } = useUserContext();

    if (!user) return <h1>Please login to see this page</h1>;
    const listToShow = user?.movieList.filter(m => !!m.dateOfWatch === (type === 'History'));
    console.log(listToShow);

    return (
        <div className="grid gap-3 mx-auto mt-3 mb-auto text-main-text">
            <h1 className="text-3xl font-semibold text-center">{type}</h1>
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
        <Link to={`/movie/${movie.tmdbMovieId}`} className="text-inherit cursor-pointer">
            <div className="grid grid-cols-[92px_1fr] items-center bg-gray-500/50 text-inherit rounded-xl overflow-hidden shadow-[3px_-4px_10px_-3px_#000]">
                <img
                    className="w-[92px] aspect-[2/3]"
                    src={`${import.meta.env.VITE_API_URL}/api/v1/img/w92${movie.movie.poster_path}`}
                    alt={`${movie.movie.title} poster`}
                    loading="lazy"
                />
                <div className="grid gap-2 px-2 py-1">
                    <h3 className="font-bold line-clamp-1 ">{movie.movie.title}</h3>
                    <p className="text-sm flex gap-2 line-clamp-1">
                        <span className="font-semibold">{movie.movie.release_date?.split('-')[0]}</span>
                        <span className="line-clamp-1">{movie.movie.genres_list?.map(g => g.name).join(', ')}</span>
                    </p>
                    <>
                        {movie.dateOfWatch ? (
                            <>
                                <div className="flex gap-2 text-sm items-center ">
                                    <StarRating rating={movie.rating} /> ({movie.rating})
                                </div>
                                <p className="text-sm">
                                    Watched at <FormattedDate isoDate={movie.dateOfWatch} />
                                </p>
                            </>
                        ) : (
                            <>
                                <div className="flex gap-2 text-sm items-center ">
                                    <StarRating rating={movie.movie?.vote_average} />
                                    (<FormatNumber number={movie.movie?.vote_count} />)
                                </div>
                                <p className="text-sm">
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
