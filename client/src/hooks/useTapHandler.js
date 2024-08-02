import { useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useTapHandler = movieId => {
    const navigate = useNavigate();
    const lastTapRef = useRef(0);
    const singleTapTimerRef = useRef(null);
    const targetRef = useRef(null);

    const handleSingleTap = useCallback(() => {
        navigate(`../movie/${movieId}`);
    }, [navigate, movieId]);

    const handleDoubleTap = useCallback(() => {
        console.log('Double tap - edit data from the server for watchlist');
    }, []);

    const handleTap = useCallback(
        e => {
            e.preventDefault();
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTapRef.current;

            clearTimeout(singleTapTimerRef.current);

            if (tapLength < 400 && tapLength > 0) {
                handleDoubleTap();
            } else {
                singleTapTimerRef.current = setTimeout(handleSingleTap, 400);
            }

            lastTapRef.current = currentTime;
        },
        [handleSingleTap, handleDoubleTap]
    );

    useEffect(() => {
        const target = targetRef.current;
        if (target) {
            target.addEventListener('touchstart', handleTap, { passive: false });
            return () => {
                target.removeEventListener('touchstart', handleTap);
                clearTimeout(singleTapTimerRef.current);
            };
        }
    }, [handleTap]);

    return targetRef;
};

export default useTapHandler;
