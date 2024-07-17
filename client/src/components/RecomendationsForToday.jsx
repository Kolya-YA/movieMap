import { Link } from "react-router-dom";

import HomeMovieCard from "./HomeMovieCard";

const tempMovieList = [
    { id: 111, title: "The Shawshank Redemption", year: 1994, rating: 9.2 },
    { id: 222, title: "The Godfather", year: 1972, rating: 9.1 },
    { id: 333, title: "The Dark Knight", year: 2008, rating: 9.0 },
]


const RecomendationsForToday = () => {
    return (
        <>
            <hr />
            <h2 className="text-xl font-semibold">Recommendations for today from MovAI</h2>
            <ul>
                {tempMovieList.map((movie) => (
                    <HomeMovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
            <Link to='/recomedation' className="text-blue-500 hover:underline">Get More Recommendations from MovAI</Link>
            <hr />
        </>
    )
}

export default RecomendationsForToday;