import { LuFileText } from "react-icons/lu";
import { FormatNumber, StarRating } from "../";

const Rating = ({ movie, user }) => {
    user = { rating: 7 }; //Fake user rating

    return (
        <div className="grid grid-cols-2 gap-2">
            <div className="grid justify-center gap-1">
                <StarRating rating={movie.vote_average} />
                <p className="text-center">
                    <span>{movie.vote_average}/10</span>
                    <span> (<FormatNumber number={movie.vote_count} />)</span>
                </p>
            </div>
            {user && (
                <div className="grid justify-center gap-1">
                    <StarRating rating={user.rating} />
                    <p className="text-center">
                        {user.rating}/10
                        <LuFileText size={18} className="inline mx-1" aria-hidden="true" />
                        <span className="sr-only" >Contains comments</span>
                    </p>
                </div>
            )}
        </div>
    )
}

export default Rating;