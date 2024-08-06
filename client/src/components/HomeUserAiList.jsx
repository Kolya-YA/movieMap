import { AiReq, HomeUserMovieCard } from ".";

const HomeUserAiList = ({ title, movieList }) => {

    if (!movieList) {
        return <p>Loading...</p>
    }
    // console.log(movieList)
    return (
        <section className="grid gap-4 p-2 bg-block-bg">
            <h2 className="text-xl font-semibold">{title}</h2>
            <AiReq />
            {
                movieList.length
                    ? (
                        <>
                            <ul className="grid gap-2 grid-flow-col overflow-x-auto auto-cols-[154px] snap-x snap-mandatory">
                                {movieList
                                    .sort((a, b) => (new Date(b.createdAt) - new Date(a.createdAt)))
                                    .map((movie) => (
                                        <HomeUserMovieCard key={movie._id} movie={movie} type='AI' />
                                    ))}
                            </ul>
                        </>
                    )
                    : <p>No movies in your list</p>
            }
        </section>
    )
}

export default HomeUserAiList;