import { Link } from "react-router-dom";
import { AiReq, HomeUserMovieCard } from ".";

const HomeUserList = ({ title, movieList, type }) => {

    return (
        <section className="grid gap-4 p-2 bg-white/20">
            <h2 className="text-xl font-semibold">{title}</h2>
            {(type === 'AI') && <AiReq />}
            {
                movieList.length
                    ? (
                        <>
                            <ul className="grid gap-2 grid-flow-col overflow-x-auto auto-cols-[154px] snap-x snap-mandatory">
                                {movieList.map((movie) => (
                                    <HomeUserMovieCard key={movie.id} movie={movie} />
                                ))}
                            </ul>
                            <Link to='/waiting-list' className="text-blue-200 hover:underline text-end">To full list</Link>
                        </>
                    )
                    : <p>No movies in your list</p>
            }
        </section>
    )
}

export default HomeUserList;