import HomeMovieCard from "./HomeMovieCard";

const HomePageMovieList = ({ movieList }) => {

    return (
        <section className="grid gap-4 p-2">
            <h2 className="text-xl font-semibold">{movieList?.title} list</h2>
            <ul className="grid gap-2">
                {movieList?.list.results.map((movie) => (
                    <HomeMovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
            <hr />
        </section>
    )
}

export default HomePageMovieList;