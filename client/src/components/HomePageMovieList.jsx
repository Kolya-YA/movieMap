import HomeMovieCard from "./HomeMovieCard";

const HomePageMovieList = ({ movieList }) => {

    return (
        <section className="bg-white/20">
            <hr />
            <h2 className="text-xl font-semibold">{movieList?.title} list</h2>
            <ul>
                {movieList?.list.results.map((movie) => (
                    <HomeMovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
            <hr />
        </section>
    )
}

export default HomePageMovieList;