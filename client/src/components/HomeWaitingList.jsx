import { Link } from "react-router-dom";

import HomeMovieCard from "./HomeMovieCard";

const tempMovieList = [
    { id: 111, title: "Inception", year: 2010, rating: 8.8 },
    { id: 222, title: "The Shawshank Redemption", year: 1994, rating: 9.3 },
    { id: 333, title: "Pulp Fiction", year: 1994, rating: 8.9 },
    { id: 444, title: "The Dark Knight", year: 2008, rating: 9.0 },
    { id: 555, title: "Fight Club", year: 1999, rating: 8.8 }
];

const HomeWaitingList = () => {
    return (
        <>
            <hr />
            <h2 className="text-xl font-semibold">My waiting list</h2>
            <Link to='/waiting-list' className="text-blue-500 hover:underline">To full waiting list</Link>
            <ul>
                {tempMovieList.map((movie) => (
                    <HomeMovieCard key={movie.id} movie={movie}/>
                ))}
            </ul>
            <hr />
        </>
    )
}

export default HomeWaitingList;