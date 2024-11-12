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
            <div className="">
                <img
                    className="mx-auto rounded-lg"
                    src={`${import.meta.env.VITE_API_URL}/api/v1/img/w342${detail?.poster_path}`}
                    alt={detail.title}
                />
            </div>
            <div className="grid gap-4 -mt-40 bg-black/70 p-2">
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
