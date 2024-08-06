import { HomeUserMovieCard } from "./";

const HomePageMovieList = ({ movieList }) => {

    return (
        <section className="grid gap-4 py-4 px-2 bg-block-bg">
            <h2 className="text-center text-xl font-medium">
                <span className=
                    "inline-block text-center rounded-md border border-white border-opacity-70 bg-black bg-opacity-70 shadow-diffused text-main-text py-2 px-4  "
                >
                    {movieList?.title}
                </span>
            </h2>
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
        </section >
    )
}

export default HomePageMovieList;