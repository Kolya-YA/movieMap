import { Link } from "react-router-dom";

import HomeMovieCard from "./HomeMovieCard";

const tempMovieList = [
    { id: 111, title: "The Shawshank Redemption", year: 1994, rating: 9.2 },
    { id: 222, title: "The Godfather", year: 1972, rating: 9.1 },
    { id: 333, title: "The Dark Knight", year: 2008, rating: 9.0 },
]

const HomeHistoryList = () => {
    return (
        <>
            <hr />
            <h2 className="text-xl font-semibold">My history list</h2>
            <Link to='/history-list' className="text-blue-500 hover:underline">To full hisory list</Link>
            <ul>
                {tempMovieList.map((movie) => (
                    <HomeMovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
            <hr />
        </>
    )
}

export default HomeHistoryList;