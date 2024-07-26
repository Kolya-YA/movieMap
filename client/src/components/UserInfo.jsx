import { Link } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";

const UserInfo = ({ user }) => {
    return (
        <section>
            <h1>Current User info:</h1>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
            {user.movieList?.length > 0 && (
                <>
                    <h3>User movie list:</h3>
                    <ol className="list-decimal list-inside">
                        {user.movieList.map((movie) => (
                            <li key={movie.id}>
                                {movie.tmdbMovieId}:
                                <Link to={`/movie/${movie.tmdbMovieId}`} className="text-blue-900 hover:underline">
                                    Details
                                </Link>
                                {movie.dateOfWatch
                                    ? <LuEye size={20} className="inline" aria-hidden="true" />
                                    : <LuEyeOff size={20} className="inline" aria-hidden="true" />}
                            </li>
                        ))}
                    </ol>
                </>
            )}
        </section>
    )
}

export default UserInfo;
