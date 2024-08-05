import { useMemo } from "react";
import { useUserContext } from "../hooks";
import { HomeUserList, HomePageMovieList } from '../components'

const UserHomePage = ({ dailyRecs }) => {
    const { user } = useUserContext();

    const { movieList = [], movAIRecs = [] } = user || {};

    const waitingList = useMemo(() => (
        movieList.filter(m => !m.dateOfWatch && !m.deleted).toReversed()
    ), [movieList])

    const historyList = useMemo(() => (
        movieList.filter(m => m.dateOfWatch).toSorted((a, b) => a.dateOfWatch - b.dateOfWatch)
    ), [movieList])

    const aiList = useMemo(() => (
        movAIRecs
    ), [movAIRecs])

    return (
        <>
            <HomeUserList movieList={waitingList} title="My waiting list" />
            <HomeUserList movieList={aiList} title="My AI list" type='AI' user={user} />
            <HomeUserList movieList={historyList} title="My history list" />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Popular")} />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Now playing")} />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Upcoming")} />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Top rated")} />
        </>
    );
}

export default UserHomePage;