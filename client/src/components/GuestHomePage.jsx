import { HomePageMovieList } from './index.js';
import { HomeLoginSignup } from './HomeComponents/index.js';
const GuestHomePage = ({ dailyRecs }) => {

    return (
        <>
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Most popular")} />
            <HomeLoginSignup />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Now playing")} />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Upcoming")} />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Top rated")} />
        </>
    );
}

export default GuestHomePage;