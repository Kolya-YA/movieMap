import { useUserContext } from '../hooks';
import { HomeHistoryList, HomeWaitingList, HomePageMovieList } from '../components'

const UserHomePage = ({ dailyRecs }) => {
    const { user } = useUserContext()

    return (
        <>
            <h1>Personal home page for {user.email}</h1>
            <HomeWaitingList />
            <HomeHistoryList />

            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Popular")} />
        </>
    );
}

export default UserHomePage;