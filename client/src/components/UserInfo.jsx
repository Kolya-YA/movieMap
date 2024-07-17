const UserInfo = ({ user }) => {
    return (
        <>
            <hr />
            <h2>User info</h2>
            <p>Welcome, {user.name}</p>
            <p>Index: {user.id}</p>
            <p>Email: {user.email}</p>
            {user.movieList.length > 0 && (
                <>
                    <h3>User movie list:</h3>
                    <ul>
                        {user.movieList.map((movie, index) => (
                            <li key={movie.id}>{index + 1}. id: {movie.id} Date: {movie.viewedDate} Rating: {movie.rating}</li>
                        ))}
                    </ul>
                </>
            )}
            <hr />
        </>
    )
}

export default UserInfo;