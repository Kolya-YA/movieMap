import { useContext } from 'react';

import { UserContext } from '../contexts';
import { HomeHistoryList, HomeWaitingList, HomePageMovieList } from '../components'

const UserHomePage = ({ dailyRecs }) => {
    const { user } = useContext(UserContext)

    return (
        <>
            <h1>Personal home page for {user.name}</h1>
            <HomeWaitingList />
            <HomeHistoryList />

            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Popular")} />
        </>
    );
}

export default UserHomePage;