import { Link } from 'react-router-dom';
import { useUserContext } from '../hooks';
import { FormattedDate } from '../components';
import { StarRating, FormatNumber } from '../components';

const UserMovieList = ({ type }) => {
    const { user } = useUserContext();

    if (!user) return <h1>Please login to see this page</h1>;
    const listToShow = user?.movieList.filter(m => !!m.dateOfWatch === (type === 'history'));

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
        <Link to={`/movie/${movie.tmdbMovieId}`} className="h-40 text-white mb-4 px-4 cursor-pointer">
            <div className="flex h-40 items-center rounded-xl gap-4 mb-4 px-4 bg-opacity-50 bg-gray-500">
                <img
                    className="w-[92px] aspect-[2/3]"
                    src={`https://image.tmdb.org/t/p/w92${movie.movie.poster_path}`}
                    alt={`${movie.movie.title} poster`}
                    loading="lazy"
                />
                <div className="px-2 py-1">
                    <h3 className="font-bold line-clamp-1 ">{movie.movie.title}</h3>
                    <p className="text-sm flex gap-2 line-clamp-1">
                        <span className="font-semibold">{movie.movie.release_date?.split('-')[0]}</span>
                        <span className="line-clamp-1">{movie.movie.genres_list?.map(g => g.name).join(', ')}</span>
                    </p>
                    <div className="flex gap-2 text-sm ">
                        <StarRating rating={movie.movie?.vote_average} />
                        (<FormatNumber number={movie.movie?.vote_count} />)
                    </div>

                    <div>
                        {movie.dateOfWatch ? (
                            <div className="text-sm mt-4">
                                <div className="flex gap-2 text-sm ">
                                    <StarRating rating={movie.rating} />
                                </div>
                                Watched <FormattedDate isoDate={movie.dateOfWatch} />
                            </div>
                        ) : (
                            <p className="text-sm mt-4">
                                Added <FormattedDate isoDate={movie.dateOfAdded} />
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
