import { Link } from "react-router-dom";

const HomeMovieCard = ({ movie }) => {
    return (
        <li key={movie.id}>
            {movie.title} ({movie.year}) - {movie.rating}
            <Link to={`/movie/${movie.id}`} className="text-blue-500 hover:underline">Details</Link>
        </li>
    )
}

export default HomeMovieCard;