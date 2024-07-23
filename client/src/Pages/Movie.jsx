import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { LuBookmark, LuBookmarkPlus, LuEye, LuEyeOff, LuYoutube } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import FormatNumber from '../components/FormatNumber';
import StarRating from '../components/StarRating';
import RatingCommentModal from '../components/RatingCommentModal';
import axios from 'axios';


const Movie = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState('');

    // This function is for bookmark and watchlist
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isWatchlisted, setIsWatchlisted] = useState(false);

    // This function is for more information expand/collapse
    const [isMore, setIsMore] = useState(false);
    const toggleMore = () => {
        setIsMore(!isMore);
    }

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
        saveData(!isBookmarked);
      };

    const toggleWatchlist = () => {
    setIsWatchlisted(!isWatchlisted);
    saveData(!isWatchlisted);
    };
      
    const saveData = (bookmarkState) => {
    console.log('Bookmark state saved:', bookmarkState);
    };
    useEffect(() => {
        const fetchDetail = async () => {
            const url = `/api/v1/details/movie/${id}`;
            try {
                const APIdata = await axios.get(url)
                setDetail(APIdata.data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchDetail()
    }, [])

    return (
        <>
         <div className=" text-white mx-6 font-playfair">
            <img className="w-full h-auto" src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`} alt={detail.title} />
            <div className="-mt-42 px-6 inset-x-0 bg-black bg-opacity-70">
                <div className="p-4">
                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl font-semibold font-black-ops-one mr-2">{detail.title}</h1>
                        
                    </div>
                    <div className="flex">
                    <p className="mr-5 mb-2">{detail.release_date}</p>
                    {detail.genres_list && detail.genres_list.length > 0 && (
                        <p className="text-center">
                            Genres: {detail.genres_list.join(', ')}
                        </p>
                    )}

                    </div>
                    
                    <div className="flex justify-center items-center mb-4">
                        <div>
                        <div className="flex text-2xl items-center mr-4">
                            <StarRating rating={detail.vote_average} />
                            <p className="text-sm ml-2"><FormatNumber number={detail.vote_count} /></p>
                        </div>
                        <div className="flex text-2xl items-center mr-4">
                            <StarRating rating={detail.vote_average} />
                            <RatingCommentModal />
                        </div>
                        </div> 
                        <button onClick={toggleBookmark} className="text-3xl mx-2">
                            {isBookmarked ? <LuBookmark /> : <LuBookmarkPlus />}
                        </button>
                        <button onClick={toggleWatchlist} className="text-3xl">
                            {isWatchlisted ? <LuEyeOff /> : <LuEye />}
                        </button>
                    </div>

                    <p className="text-lg mb-4 line-clamp-4">
                        {detail.overview}
                    </p>
                    <div className="flex justify-center mb-4">
                        <button className="bg-slate-900 text-xl rounded-md px-4 py-2" onClick={toggleMore}>
                            {isMore ? 'Hide' : 'More information'}
                        </button>
                    </div>
                    {isMore && (
                        <div className="mt-4">
                              {detail.casts && detail.casts.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="text-xl">Actors :</h3>
                                    <p className="text-sm">
                                        {detail.casts.map(cast => cast.name).join(', ')}
                                    </p>
                                </div>
                            )}

                            {detail.directors && detail.directors.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="text-xl">Directors:</h3>
                                    <p className="text-sm">
                                        {detail.directors.map(director => director.name).join(', ')}
                                    </p>
                                </div>
                            )}

                        </div>
                    )}
                    <div className="flex justify-center mb-4">
                    {detail.trailers && detail.trailers.length > 0 && (
                                <div className="font-bold flex">
                                    
                                    <Link to={`${detail.trailers[0].key}`} className=" bg-slate-900 flex text-white px-4 py-2 rounded-md inline-block">
                                         <LuYoutube className='mr-2 text-2xl'></LuYoutube>
                                         Trailer
                                    </Link>
                                </div>
                            )}
                    </div>
                    

                    
        </div>

                  
                </div>
                
            </div>
            
                
        </>
    );
}

export default Movie;