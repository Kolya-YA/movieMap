import { useCallback } from 'react';

import { useToggle } from '../../hooks';
import { LuBookmark, LuBookmarkPlus, LuEye, LuEyeOff } from 'react-icons/lu';

const UserButtons = ({ user, movie }) => {
    const [inWatchHistory, toggleWatchHistory] = useToggle(false);
    const [inWatchlist, toggleWatchlist] = useToggle(false);

    const saveData = useCallback((state, type) => {
        console.log(`${type} state saved:`, state);
    }, []);

    const handleBookmark = useCallback(() => {
        toggleWatchlist();
        saveData(!inWatchlist, 'Bookmark');
    }, [inWatchlist, toggleWatchlist, saveData]);

    const handleWatchlist = useCallback(() => {
        toggleWatchHistory();
        saveData(!inWatchHistory, 'Watchlist');
    }, [inWatchHistory, toggleWatchHistory, saveData]);

    console.log(user, movie)

    return (
        <div className="grid grid-cols-2 gap-4">
            <button type="button" onClick={handleBookmark} className="rounded-sm px-2 border bg-white/30">
                {inWatchlist
                    ? (<>
                        <LuBookmarkPlus size={20} className="inline" aria-hidden="true" /> Add to list
                    </>)
                    : (<>
                        <LuBookmark size={20} className="inline" aria-hidden="true" /> In my list
                    </>)
                }
            </button>
            <button type="button" onClick={handleWatchlist} className="rounded-sm px-2 border bg-white/30">
                {inWatchHistory
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