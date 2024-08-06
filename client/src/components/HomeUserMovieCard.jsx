import { LuBrainCircuit } from "react-icons/lu";
import { Link } from "react-router-dom";

const HomeUserMovieCard = ({ movie, type }) => {
    let posterUrl = movie?.movie?.poster_path && `https://image.tmdb.org/t/p/w154${movie.movie.poster_path}`
    let cardTitle = movie?.movie?.title || 'To full waiting list'
    let cardLink = movie?.tmdbMovieId ? `/movie/${movie.tmdbMovieId}` : '/waiting-list'
    let lastCard = !movie?.tmdbMovieId

    if (type === 'R') {
        posterUrl = movie?.poster_path && `https://image.tmdb.org/t/p/w154${movie.poster_path}`
        cardTitle = movie?.title || 'Unknown movie'
        cardLink = movie?.id ? `/movie/${movie.id}` : '/waiting-list'
        lastCard = !movie?.id
    }

    if (type === 'AI') {
        posterUrl = movie?.poster_path && `https://image.tmdb.org/t/p/w154${movie.poster_path}`
        cardTitle = movie?.title || 'To full list'
        cardLink = `/movie/${movie?.tmdbMovieId}`
        lastCard = !movie?.tmdbMovieId
    }


    return (
        <li className="bg-gray-300 my-2 text-end rounded-xl overflow-hidden aspect-[2/3] snap-always snap-start shadow-[3px_-4px_10px_-3px_#000]">
            <Link
                to={cardLink}
                className="relative grid [grid-template-areas:'card'] min-h-full text-main-text
                hover:text-yellow-300 focus:text-yellow-300 transition-colors"
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
                <h3 className={`
                    [grid-area:card] text-xl mt-auto px-1 py-2 bg-black/80 text-center text-balance italic font-medium
                    ${lastCard ? 'mb-auto' : ''}
                    ${type === 'AI' ? ' bg-white/80 text-gray-800' : ''}
                    `}>
                    {cardTitle}

                </h3>
                {type === 'AI' &&
                    <LuBrainCircuit className="absolute top-2 right-2 text-2xl p-1 rounded-full text-yellow-700 bg-white/70" />
                }
            </Link>
        </li >
    )
}

export default HomeUserMovieCard;