import { LuFileText } from "react-icons/lu";
import { FormatNumber, StarRating } from "../";

import { useUserContext } from '../../hooks';

const Rating = ({ movie }) => {
    const { user } = useUserContext();
    const movieInUserList = user?.movieList?.find(m => m.tmdbMovieId === movie.tmdb_id)

    return (
        <div className="grid grid-cols-2 gap-2">
            <div className="grid justify-center gap-1">
                <StarRating rating={movie.vote_average} />
                <p className="text-center">
                    <span>{movie.vote_average}/10</span>
                    <span> (<FormatNumber number={movie.vote_count} />)</span>
                </p>
            </div>
            {movieInUserList?.dateOfWatch && (
                <div className="grid justify-center gap-1">
                    <StarRating rating={movieInUserList.rating} />
                    <p className="text-center">
                        {movieInUserList.rating}/10
                        {
                            !!movieInUserList.comment
                            && (
                                <>
                                    <span className="sr-only">Contains comments</span>
                                    <LuFileText size={18} className="inline mx-1" aria-hidden="true" />
                                </>
                            )
                        }
                        <span className="sr-only" >Contains comments</span>
                    </p>
                </div>
            )}
        </div>
    )
}

export default Rating;