import { useToggle } from '../../hooks';
import { LuYoutube } from 'react-icons/lu';

const AdditionalDetails = ({ movie }) => {
    const [isMore, toggleMore] = useToggle(false);

    return (
        <>
            <p className={`text-pretty ${isMore ? '' : 'line-clamp-4'}`}>{movie.overview}</p>

            {isMore && (
                <>
                    {movie.casts?.length > 0 && (
                        <p>
                            <span className="font-semibold">Cast: </span>
                            {movie.casts.map(cast => cast.name).join(', ')}
                        </p>
                    )}

                    {movie.directors?.length > 0 && (
                        <p>
                            <span className="font-semibold">Directors: </span>
                            {movie.directors.map(director => director.name).join(', ')}
                        </p>
                    )}
                </>
            )}
            <div className="flex justify-center">
                <button type="button" className="w-52 h-10 border-white-hover-gray" onClick={toggleMore}>
                    {isMore ? 'Hide' : 'More information'}
                </button>
            </div>

            <div className="flex justify-center">
                {movie.trailers?.length > 0 && (
                    <a
                        href={`${movie.trailers[0]?.url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-52 h-10 border-white-hover-gray flex justify-center items-center"
                    >
                        <LuYoutube className="mr-2 text-2xl" />
                        Trailer
                    </a>
                )}
            </div>
        </>
    )

}

export default AdditionalDetails;