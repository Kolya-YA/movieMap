import { useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useTapHandler = movieId => {
    const navigate = useNavigate();
    const lastTapRef = useRef(0);
    const singleTapTimerRef = useRef(null);
    const targetRef = useRef(null);
    const touchStartRef = useRef({ x: 0, y: 0 });
    const isDraggingRef = useRef(false);

    const handleSingleTap = useCallback(() => {
        navigate(`../movie/${movieId}`);
    }, [navigate, movieId]);

    const handleDoubleTap = useCallback(() => {
        console.log('Double tap - edit data from the server for watchlist');
        // toast.error('It is added in watchlist', {
        //     position: 'top-center',
        //     autoClose: 2000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
    }, []);

    const handleTap = useCallback(() => {
        if (isDraggingRef.current) {
            return;
        }

        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTapRef.current;

        clearTimeout(singleTapTimerRef.current);

        if (tapLength < 400 && tapLength > 0) {
            handleDoubleTap();
        } else {
            singleTapTimerRef.current = setTimeout(handleSingleTap, 400);
        }

        lastTapRef.current = currentTime;
    }, [handleSingleTap, handleDoubleTap]);

    useEffect(() => {
        const target = targetRef.current;
        if (target) {
            const handleTouchStart = e => {
                const touch = e.touches[0];
                touchStartRef.current = { x: touch.clientX, y: touch.clientY };
                isDraggingRef.current = false;
            };

            const handleTouchMove = e => {
                if (!touchStartRef.current) return;

                const touch = e.touches[0];
                const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
                const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);

                if (deltaX > 10 || deltaY > 10) {
                    isDraggingRef.current = true;
                }
            };

            const handleTouchEnd = () => {
                if (!isDraggingRef.current) {
                    handleTap();
                }
                touchStartRef.current = null;
                isDraggingRef.current = false;
            };

            target.addEventListener('touchstart', handleTouchStart, {
                passive: true,
            });
            target.addEventListener('touchmove', handleTouchMove, { passive: true });
            target.addEventListener('touchend', handleTouchEnd);

            return () => {
                target.removeEventListener('touchstart', handleTouchStart);
                target.removeEventListener('touchmove', handleTouchMove);
                target.removeEventListener('touchend', handleTouchEnd);
                clearTimeout(singleTapTimerRef.current);
            };
        }
    }, [handleTap]);

    return targetRef;
};

export default useTapHandler;
