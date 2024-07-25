import { useParams } from 'react-router-dom';

import { useMovieDetail } from '../hooks';
import { Loading } from '../components';
import { AdditionalDetails, Rating, UserButtons } from '../components/MovieDetailsComponents';

const Movie = () => {
    const { id } = useParams();
    const { detail, isLoading: isDataLoading, error } = useMovieDetail(id);

    if (error) return <div className="text-white">{error}</div>;
    if (isDataLoading) return <Loading />;
    if (!detail) return <div>No data</div>;

    return (
        <div className="text-white grid grid-cols-1 grid-rows-[1fr_auto] p-2 font-playfair">
            <div className="aspect-[2/3]">
                <img
                    className="rounded-lg"
                    src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
                    alt={detail.title}
                />
            </div>
            <div className="grid gap-4 row-start-2 row-span-2 -mt-40 bg-black/70 p-4">
                <h1 className="text-3xl text-center text-balance font-semibold font-black-ops-one">{detail.title}</h1>
                <div className="flex gap-2">
                    <p className="font-semibold">{detail.release_date}</p>
                    {detail.genres_list?.length && (
                        <p className="text-center">{detail.genres_list.join(', ')}</p>
                    )}
                </div>
                <Rating movie={detail} user={null} />
                <UserButtons movie={detail} user={null} />
                <AdditionalDetails movie={detail} />
            </div>
        </div>
    );
};

export default Movie;
