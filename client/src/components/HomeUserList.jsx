import { Button, HomeUserMovieCard } from ".";

const HomeUserList = ({ title, movieList, listLink }) => {

    if (!movieList) {
        return <p>Loading...</p>
    }

    return (
        <section className="grid gap-4 py-4 px-2 bg-white/20">
            <h2 className="text-center text-xl font-medium">
                <Button btnLink={listLink} text={title} />
            </h2>
            {
                movieList.length
                    ? (
                        <>
                            <ul className="grid gap-2 grid-flow-col overflow-x-auto auto-cols-[154px] snap-x snap-mandatory">
                                {movieList.map((movie) => (
                                    <HomeUserMovieCard key={movie.tmdbMovieId} movie={movie} />
                                ))}
                            </ul>
                        </>
                    )
                    : <p>No movies in your list</p>
            }
        </section>
    )
}

export default HomeUserList;