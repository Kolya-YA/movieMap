import { useEffect, useRef, useState } from 'react';
import StarRating from '../StarRating';
import { useAuthCheck, useUserContext } from '../../hooks';

const RatingCommentDialog = ({ isOpen, onClose, movieToEdit }) => {

    const dialogRef = useRef(null);
    const checkAuth = useAuthCheck();
    const { updateMovieInUserList } = useUserContext();

    const [formData, setFormData] = useState({
        rating: movieToEdit?.rating || 0,
        comment: movieToEdit?.comment || '',
        dateOfWatch: new Date(),
    });

    useEffect(() => {
        const dialog = dialogRef.current;
        if (isOpen) dialog.showModal();
        else dialog.close();
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checkAuth()) return; // user is not logged in or token has expired
        try {
            updateMovieInUserList(movieToEdit.id, formData);
        } catch (error) {
            console.error("Movie update error: ", error);
        }

        onClose();
    };

    const handleBackdropClick = (event) => {
        const dialogDimensions = dialogRef.current.getBoundingClientRect();
        if (
            event.clientX < dialogDimensions.left ||
            event.clientX > dialogDimensions.right ||
            event.clientY < dialogDimensions.top ||
            event.clientY > dialogDimensions.bottom
        ) {
            onClose();
        }
    };

    return (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <dialog ref={dialogRef} onClick={handleBackdropClick} onClose={onClose} className='
            p-4 max-w-md mx-auto rounded-lg shadow-lg
            bg-black text-white
            backdrop:bg-white/80'>
            <button
                type='button'
                onClick={onClose}
                className=" absolute top-2 end-2 block ms-auto px-2 text-gray-300 hover:text-gray-100"
            >
                ×
            </button>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="text-center">
                    <StarRating rating={formData.rating} />
                    <input
                        type="range"
                        id="rating"
                        min="0"
                        max="10"
                        value={formData.rating}
                        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                        className="px-1 rounded-md   bg-gray-500"
                    />
                    <label htmlFor="rating" className="block text-sm font-medium">
                        Rating: {formData.rating}
                    </label>
                </div>
                <div>
                    <label htmlFor="comment" className="text-sm">
                        My comment
                    </label>
                    <textarea
                        id="comment"
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                        rows={4}
                        className="w-full px-1 rounded-md bg-gray-500"
                    />
                </div>
                <button
                    type="submit"
                    className="px-5 py-2 border border-gray-300 rounded-md text-sm text-white bg-gray-600 hover:bg-black"
                >
                    Save
                </button>
            </form>
        </dialog>
    )
}

export default RatingCommentDialog;