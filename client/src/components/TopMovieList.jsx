import HomeMovieCard from "./HomeMovieCard";

const TopMovieList = () => {
    const tempMovieList = [
        { id: 111, title: 'The Shawshank Redemption', year: 1994, rating: 9.2 },
        { id: 222, title: 'The Godfather', year: 1972, rating: 9.1 },
        { id: 333, title: 'The Dark Knight', year: 2008, rating: 9.0 },
        { id: 444, title: 'The Lord of the Rings: The Return of the King', year: 2003, rating: 8.9 },
        { id: 555, title: 'Pulp Fiction', year: 1994, rating: 8.9 },
        { id: 666, title: 'Schindler`s List', year: 1993, rating: 8.9 },
        { id: 777, title: '12 Angry men', year: 1957, rating: 8.9 },
        { id: 888, title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8 },
        { id: 999, title: 'Fight Club', year: 1999, rating: 8.8 },
        { id: 100500, title: 'Forrest Gump', year: 1994, rating: 8.8 }
    ];

    return (
        <>
            <hr />
            <h2 className="text-xl font-semibold">Top movie list</h2>
            <ul>
                {tempMovieList.map((movie) => (
                    <HomeMovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
            <hr />
        </>
    )
}

export default TopMovieList;