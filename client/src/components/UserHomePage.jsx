import { useContext } from 'react';

import { UserContext } from '../contexts';
import { HomeHistoryList, HomeWaitingList, RecomendationsForToday } from '../components'

const UserHomePage = () => {
    const { user } = useContext(UserContext)

    return (
        <>
            <h1>Personal home page for {user.name}</h1>
            <RecomendationsForToday />
            <HomeWaitingList />
            <HomeHistoryList />
        </>
    );
}

export default UserHomePage;