import { useMemo } from "react";
import { useUserContext } from "../hooks";
import { HomeUserList, HomePageMovieList, HomeUserAiList } from '../components'

const UserHomePage = ({ dailyRecs }) => {
    const { user } = useUserContext();

    const { movieList = [], movieAiRecs = [] } = user || {};

    const waitingList = useMemo(() => (
        movieList.filter(m => !m.dateOfWatch && !m.deleted).toReversed()
    ), [movieList])

    const historyList = useMemo(() => (
        movieList.filter(m => m.dateOfWatch).toSorted((a, b) => a.dateOfWatch - b.dateOfWatch)
    ), [movieList])

    const aiList = useMemo(() => (
        movieAiRecs
    ), [movieAiRecs])

    return (
        <>
            <HomeUserList movieList={waitingList} title="Watch list" listLink="waiting-list" />
            <HomeUserAiList movieList={aiList} title="AI recomendations" />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Most popular")} />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Now playing")} />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Upcoming")} />
            <HomeUserList movieList={historyList} title="History list" listLink="history-list" />
            <HomePageMovieList movieList={dailyRecs?.find(r => r.title === "Top rated")} />
        </>
    );
}

export default UserHomePage;