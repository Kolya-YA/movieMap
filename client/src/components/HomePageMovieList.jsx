import { HomeUserMovieCard } from "./";

const HomePageMovieList = ({ movieList }) => {

    return (
        <section className="grid gap-4 p-2 bg-block-bg">
            <h2 className="text-xl font-semibold">{movieList?.title} list</h2>
            {
                !movieList?.list?.results.length
                    ? <p>No movies in your list</p>
                    : (
                        <ul className="grid gap-2 grid-flow-col overflow-x-auto auto-cols-[154px] snap-x snap-mandatory">
                            {movieList?.list.results.map((movie) => (
                                <HomeUserMovieCard key={movie.id} movie={movie} type="R" />
                            ))}
                        </ul>
                    )
            }
        </section>
    )
}

export default HomePageMovieList;