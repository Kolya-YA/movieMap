import { AiReq, HomeUserMovieCard } from ".";

const HomeUserAiList = ({ title, movieList }) => {

    if (!movieList) {
        return <p>Loading...</p>
    }
    // console.log(movieList)
    return (
        <section className="grid gap-4 py-4 px-2 bg-block-bg">
            <h2 className="text-center text-xl font-medium">
                <span className=
                    "inline-block text-center rounded-md border border-white border-opacity-70 bg-black bg-opacity-70 shadow-diffused text-main-text py-2 px-4  "
                >
                    {title}
                </span>
            </h2>
            {
                movieList.length
                    ?
                    <ul className="grid gap-2 grid-flow-col overflow-x-auto auto-cols-[154px] snap-x snap-mandatory">
                        {movieList
                            .sort((a, b) => (new Date(b.createdAt) - new Date(a.createdAt)))
                            .map((movie) => (
                                <HomeUserMovieCard key={movie._id} movie={movie} type='AI' />
                            ))}
                    </ul>
                    :
                    <p className="w-fit mx-auto text-balance px-3 py-2 rounded-md bg-black/40">
                        Now you have no recommendation, but you have 3 free credits.
                    </p>
            }

            <AiReq />
        </section>
    )
}

export default HomeUserAiList;