import { Link } from "react-router-dom";
import { HomeUserMovieCard } from ".";

const HomeUserList = ({ title, movieList }) => {

    if (!movieList.length) {
        return (
            <section className="grid gap-4 p-2 bg-white/20">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p>No movies in your list</p>
            </section>
        )
    }
    return (
        <section className="grid gap-4 p-2 bg-white/20">
            <h2 className="text-xl font-semibold">{title}</h2>
            {
                !movieList.length
                    ? <p>No movies in your list</p>
                    : (
                        <>
                            <ul className="grid gap-2 grid-flow-col overflow-x-auto auto-cols-[154px] snap-x snap-mandatory overscroll-contain">
                                {movieList.map((movie) => (
                                    <HomeUserMovieCard key={movie.id} movie={movie} />
                                ))}
                                {/* <HomeUserMovieCard /> */}
                            </ul>
                            <Link to='/waiting-list' className="text-blue-200 hover:underline text-end">To full list</Link>
                        </>
                    )
            }
        </section>
    )
}

export default HomeUserList;