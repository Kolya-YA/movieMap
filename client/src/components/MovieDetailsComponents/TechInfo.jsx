const TechInfo = ({ movie }) => {
    const relYear = movie.release_date?.split('-')[0];
    const genresString = movie.genres_list?.map(g => g?.name).join(', ');

    return (
        <div className="flex gap-4">
            <p className="min-w-fit">
                <span className="font-semibold">{relYear}, </span>
                {movie?.runtime} min
            </p>
            <p className="text-pretty">{genresString}</p>
        </div>
    )
}

export default TechInfo;