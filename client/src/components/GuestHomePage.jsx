import { Link } from 'react-router-dom';
import { HomePageMovieList } from './index.js';
const GuestHomePage = ({ dailyRecs }) => {

    return (
        <>
            <h1>Guest Home page</h1>
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Popular")} />
            <Link
                to='login'
                className='py-1 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'
            >
                Login to take full access to our services
            </Link>
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Now playing")} />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Upcoming")} />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Top rated")} />
        </>
    );
}

export default GuestHomePage;