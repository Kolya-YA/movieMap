import { Link } from "react-router-dom";

const HomeUserMovieCard = ({ movie, type }) => {
    let posterUrl = movie?.movie?.poster_path && `https://image.tmdb.org/t/p/w154${movie.movie.poster_path}`
    let cardTitle = movie?.movie?.title || 'To full waiting list'
    let cardLink = movie?.tmdbMovieId ? `/movie/${movie.tmdbMovieId}` : '/waiting-list'
    let lastCard = !movie?.tmdbMovieId

    if (type === 'R') {
        posterUrl = movie?.poster_path && `https://image.tmdb.org/t/p/w154${movie.poster_path}`
        cardTitle = movie?.title || 'To full waiting list'
        cardLink = movie?.id ? `/movie/${movie.id}` : '/waiting-list'
        lastCard = !movie?.id
    }


    return (
        <li className="bg-slate-300 text-end rounded overflow-hidden aspect-[2/3] snap-always snap-start">
            <Link
                to={cardLink}
                className="grid [grid-template-areas:'card'] min-h-full text-white
                hover:text-yellow-300 focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
            >
                {posterUrl && (
                    <img
                        src={posterUrl}
                        alt={`${cardTitle} thumbnail`}
                        width="154px"
                        className="[grid-area:card]"
                        loading="lazy"
                    />
                )}
                <h3 className={`[grid-area:card] text-xl mt-auto px-1 py-2 bg-black/80 text-center text-balance ${lastCard ? 'mb-auto' : ''}`}>
                    {cardTitle}
                </h3>
            </Link>
        </li >
    )
}

export default HomeUserMovieCard;