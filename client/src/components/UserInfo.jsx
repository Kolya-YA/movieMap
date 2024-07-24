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
                            <li key={movie.id}>{index + 1}. id: {movie.id} Date: {movie.viewedDate} Rating: {movie.rating}</li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    )
}

export default UserInfo;