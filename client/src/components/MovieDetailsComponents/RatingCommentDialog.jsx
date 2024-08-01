import { useEffect, useRef, useState } from 'react';
import StarRating from '../StarRating';

const RatingCommentDialog = ({ isOpen, onClose }) => {
    const dialogRef = useRef(null);

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    useEffect(() => {
        const dialog = dialogRef.current;
        if (isOpen) dialog.showModal();
        else dialog.close();
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', { rating, comment });
        onClose();
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    return (
        <dialog ref={dialogRef} className='
            p-4 max-w-md mx-auto rounded-lg shadow-lg
            bg-black text-white
            backdrop:bg-white/80'>
            <button
                type='button'
                onClick={onClose}
                className=" absolute top-2 end-2 block ms-auto px-2 text-gray-300 hover:text-gray-100 "
            >
                ×
            </button>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <div>
                    <StarRating rating={rating} />
                    <label htmlFor="rating" className="block text-sm font-medium">
                        Rating
                    </label>
                    <input
                        type="number"
                        id="rating"
                        min="0"
                        max="10"
                        value={rating}
                        onChange={handleRatingChange}
                        className="px-1 rounded-md   bg-gray-500"
                    />
                </div>
                <div>
                    <label htmlFor="comment" className="text-sm">
                        My comment
                    </label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
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