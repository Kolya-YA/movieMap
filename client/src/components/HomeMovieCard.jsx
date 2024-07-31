import { Link } from "react-router-dom";

const HomeMovieCard = ({ movie }) => {
    
    return (
        <li className="bg-slate-300 text-xs p-1 rounded overflow-hidden">
            {movie.title} ({movie.release_date}) - {movie.vote_average} ({movie.vote_count})
            <Link to={`/movie/${movie.id}`} className="text-blue-500 hover:underline">Details</Link>
        </li>
    )
}

export default HomeMovieCard;