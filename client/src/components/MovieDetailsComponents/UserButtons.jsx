import { useAuthCheck, useUserContext } from '../../hooks';
import { LuBookmark, LuBookmarkPlus, LuEye, LuEyeOff } from 'react-icons/lu';

const UserButtons = ({ movie }) => {
    const { user, updateUser } = useUserContext();
    const checkAuth = useAuthCheck();
    const movieInUserList = user?.movieList?.find(m => m.tmdbMovieId === movie.id);
    const movieUserViewedDate = movieInUserList?.vievedDate;
    // const movieUserRating = movieInUserList?.rating;

    const handleBookmark = async () => {
        if (!checkAuth(user)) return; // user is not logged in or token has expired
        if (movieInUserList) return; // movie is already in user list
        const movieToAdd = {
            tmdbMovieId: movie.id,
            waitlistAddedDate: new Date(),
        };
        if (!user.movieList) user.movieList = [];
        try {
            await updateUser((prevUser) => ({ ...prevUser, movieList: [...prevUser.movieList, movieToAdd] }));
        } catch (error) {
            console.error("User updete error: ", error);
        }
    }

    const handleWatchlist = () => {
        if (!checkAuth(user)) return;
        alert('Functionality not implemented yet');
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <button type="button" onClick={handleBookmark} className="rounded-sm px-2 border bg-white/30">
                {movieInUserList
                    ? (<>
                        <LuBookmark size={20} className="inline" aria-hidden="true" /> In my list
                    </>)
                    : (<>
                        <LuBookmarkPlus size={20} className="inline" aria-hidden="true" /> Add to list
                    </>)
                }
            </button>
            <button type="button" onClick={handleWatchlist} className="rounded-sm px-2 border bg-white/30">
                {movieUserViewedDate
                    ? (<>
                        <LuEyeOff size={20} className="inline" aria-hidden="true" /> Add to history
                    </>)
                    : (<>
                        <LuEye size={20} className="inline" aria-hidden="true" /> In my history
                    </>)
                }
            </button>
        </div>
    )
}

export default UserButtons;