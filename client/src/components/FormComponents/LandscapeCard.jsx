import React from 'react';
import { FormatNumber, StarRating } from '../../components';
import { useTapHandler } from '../../hooks';

const LandscapeCard = ({ movie }) => {
    const cardRef = useTapHandler(movie.id);

    return (
        <div ref={cardRef} className="h-40 text-white mb-4 px-4 cursor-pointer">
            <div className="flex h-40 items-center rounded-xl gap-4 mb-4 px-4 bg-opacity-50 bg-gray-500">
                <img
                    width="4rem"
                    height="10rem"
                    className="w-16"
                    src={movie.poster_path}
                    alt={`${movie.title} poster`}
                    loading="lazy"
                />
                <div className="bg-black">
                    <h3 className="font-bold line-clamp-1 ">{movie.title}</h3>
                    <p className="text-sm flex gap-2 line-clamp-1">
                        <span className="font-semibold">{movie.release_date.split('-')[0]}</span>
                        <span className="line-clamp-1">{movie.genres_list.join(', ')}</span>
                    </p>
                    <div className="flex gap-2 text-sm ">
                        <StarRating size={16} rating={movie.vote_average} />
                        (<FormatNumber number={movie.vote_count} />)
                    </div>
                    <p className="text-sm line-clamp-3">{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default LandscapeCard;
