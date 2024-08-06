import { Link } from "react-router-dom";
import { useUserContext } from '../hooks'

const UserMovieList = ({ type }) => {
    const { user } = useUserContext()
    console.log(user?.movieList)

    if (!user) return <h1>Please login to see this page</h1>
    const listToShow = user?.movieList.filter(m => !!m.dateOfWatch === (type === 'history'))

    return (
        <section className="bg-white/60 p-2">
            <h1 className="text-2xl font-semibold">User {type} list</h1>
            <p>Email: {user.email}</p>
            {listToShow
                ? (
                    <ul className="grid gap-2">
                        {listToShow.map((m) => (
                            <li key={m.id} className="bg-gray-200 p-2 rounded overflow-hidden">
                                <h2>{m.movie?.title}</h2>
                                <p>
                                    {m.movie?.release_date}, { m.movie?.runtime } min
                                </p>
                                <p>
                                    {m.movie?.vote_average} / 10 ({m.movie?.vote_count})
                                </p>
                                <p>
                                    {m.movie?.genres_list.map(g => g.name).join(', ')}  
                                </p>
                                <Link to={`/movie/${m.tmdbMovieId}`} className="text-blue-900 hover:underline">
                                    Details
                                </Link>

                            </li>
                        ))}
                    </ul>
                )
                : (
                    <p>No movies in your {type} list</p>
                )}
        </section>
    )
}

export default UserMovieList;