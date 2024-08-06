import { useParams } from 'react-router-dom';

import { useMovieDetail } from '../hooks';
import { Loading } from '../components';
import { AdditionalDetails, Rating, TechInfo, UserButtons } from '../components/MovieDetailsComponents';

const Movie = () => {
    const { id } = useParams();
    const { detail, isLoading: isDataLoading, error } = useMovieDetail(id);

    if (error) return <div className="text-main-text">{error}</div>;
    if (isDataLoading) return <Loading />;
    if (!detail) return <div>No data</div>;

    return (
        <div className="text-main-text grid grid-cols-1 grid-rows-[1fr_auto] p-2 font-playfair">
            <div className="aspect-[2/3]">
                <img
                    className="rounded-lg"
                    src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
                    alt={detail.title}
                />
            </div>
            <div className="grid gap-4 row-start-2 row-span-2 -mt-40 bg-black/70 p-4">
                <h1 className="text-3xl text-center text-balance font-semibold font-black-ops-one">{detail.title}</h1>
                <TechInfo movie={detail} />
                <Rating movie={detail} />
                <UserButtons movie={detail} />
                <AdditionalDetails movie={detail} />
            </div>
        </div>
    );
};

export default Movie;
