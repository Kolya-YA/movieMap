import { LuBookmarkMinus, LuBookmarkPlus } from 'react-icons/lu';
import { RatingCommentBtn } from "./";
import { useAuthCheck, useUserContext } from '../../hooks';

const UserButtons = ({ movie }) => {
    const { user, addMovieToUserList, toggleMovieInUserList } = useUserContext();

    const checkAuth = useAuthCheck();
    const movieInUserList = user?.movieList?.find(m => m.tmdbMovieId === movie.tmdb_id)
    const movieIsDeleted = movieInUserList?.deleted;
    // const movieUserRating = movieInUserList?.rating;

    const handleBookmark = async () => {
        if (!checkAuth()) return; // user is not logged in or token has expired
        if (movieInUserList || movieIsDeleted) {
            try {
                await toggleMovieInUserList(movieInUserList.id);
            } catch (error) {
                console.error("Movie delete error: ", error);
            }
        } else {
            const movieToAdd = {
                movie: movie.id,
                tmdbMovieId: movie.tmdb_id,
                dateOfAdded: new Date(),
            };
            if (!user.movieList) user.movieList = [];
            try {
                await addMovieToUserList(movieToAdd);
            } catch (error) {
                console.error("User update error: ", error);
            }
        }
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <button type="button" onClick={handleBookmark} className="rounded-sm px-2 border bg-white/30">
                {movieInUserList && !movieIsDeleted
                    ? (<>
                        <LuBookmarkMinus size={20} className="inline" aria-hidden="true" /> Remove
                    </>)
                    : (<>
                        <LuBookmarkPlus size={20} className="inline" aria-hidden="true" /> Add
                    </>)
                }
            </button>
            {
                movieInUserList
                && !movieIsDeleted
                && <RatingCommentBtn movieToAdd={movieInUserList} user={user} />
            }
        </div>
    )
}

export default UserButtons;