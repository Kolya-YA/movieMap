import { FormatNumber, StarRating, RatingCommentModal } from "../";

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
                    <RatingCommentModal movie={movie} user={user} />
                </div>
            )}
        </div>
    )
}

export default Rating;