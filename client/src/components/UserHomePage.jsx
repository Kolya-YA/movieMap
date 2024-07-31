import { useUserContext } from "../hooks";
import { HomeUserList, HomePageMovieList } from '../components'

const UserHomePage = ({ dailyRecs }) => {
    const { user } = useUserContext()
    console.log(user)
    const waitingList = user?.movieList.filter(m => !m.dateOfWatch && !m.deleted).toReversed()
    const historyList = user?.movieList.filter(m => m.dateOfWatch).toSorted((a, b) => a.dateOfWatch - b.dateOfWatch)
    const aiList = false

    return (
        <>
            <HomeUserList movieList={waitingList} title="My waiting list" />
            <HomeUserList movieList={aiList} title="My AI list" />
            <HomeUserList movieList={historyList} title="My history list" />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Popular")} />
        </>
    );
}

export default UserHomePage;