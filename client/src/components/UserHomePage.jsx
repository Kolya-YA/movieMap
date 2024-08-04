import { useUserContext } from "../hooks";
import { HomeUserList, HomePageMovieList } from '../components'

const UserHomePage = ({ dailyRecs }) => {
    const { user } = useUserContext()

    const waitingList = user?.movieList.filter(m => !m.dateOfWatch && !m.deleted).toReversed()
    const historyList = user?.movieList.filter(m => m.dateOfWatch).toSorted((a, b) => a.dateOfWatch - b.dateOfWatch)
    const aiList = false

    return (
        <>
            <HomeUserList movieList={waitingList} title="My waiting list" />
            <HomeUserList movieList={aiList} title="My AI list" type='AI' user={user}/>
            <HomeUserList movieList={historyList} title="My history list" />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Popular")} />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Now playing")} />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Upcoming")} />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Top rated")} />
        </>
    );
}

export default UserHomePage;