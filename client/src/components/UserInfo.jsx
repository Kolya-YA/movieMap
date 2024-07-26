import { Link } from "react-router-dom";

const UserInfo = ({ user }) => {
    return (
        <section>
            <h2>Current User info:</h2>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
            {user.movieList?.length > 0 && (
                <>
                    <h3>User movie list:</h3>
                    <ul>
                        {user.movieList.map((movie, index) => (
                            <li key={movie.id}>
                                <Link to={`/movie/${movie.tmdbMovieId}`} className="text-blue-900 hover:underline">
                                {index + 1}. id: {movie.tmdbMovieId} viewed: {movie.dateOfWatch ? 'yes' : 'no'}   
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    )
}

export default UserInfo;