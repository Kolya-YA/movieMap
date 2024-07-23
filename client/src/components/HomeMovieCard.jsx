import { Link } from "react-router-dom";

const HomeMovieCard = ({ movie }) => {
    
    return (
        <li className="text-xs">
            {movie.title} ({movie.release_date}) - {movie.vote_average} ({movie.vote_count})
            <Link to={`/movie/${movie.id}`} className="text-blue-500 hover:underline">Details</Link>
        </li>
    )
}

export default HomeMovieCard;