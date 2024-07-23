import { useState } from 'react';
import { LuPencil } from 'react-icons/lu';

const RatingCommentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setRating(0);
    setComment('');
  };

  const handleSubmit = () => {
    console.log('Submitted:', { rating, comment });
    closeModal();
  };

  const handleRatingChange = (e) => {
    const value = Math.max(1, Math.min(5, Number(e.target.value)));
    setRating(value);
  };

  return (
    <>
      <button 
        onClick={openModal} 
        className="rounded-sm p-2"
      >
        <LuPencil className="text-2xl" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black text-white bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-black rounded-lg p-6 w-full max-w-md border-gray-300 border-2">
            <div className="space-y-4">
              <div>
                <label htmlFor="rating" className="block text-sm font-medium">
                  rating
                </label>
                <input
                  type="number"
                  id="rating"
                  min="0"
                  max="10"
                  value={rating}
                  onChange={handleRatingChange}
                  className="mt-2 rounded-md border-gray-300 border bg-gray-500"
                />
              </div>
              <div>
                <label htmlFor="comment" className="text-sm">
                  comment
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  className="mt-1 w-full border rounded-md border-gray-300 shadow-sm bg-gray-500"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-center space-x-3">
              <button
                onClick={closeModal}
                className="px-5 py-2 border border-gray-300 rounded-md text-sm text-white bg-gray-600 hover:bg-black"
              >
                cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2 border border-gray-300 rounded-md text-sm text-white bg-gray-600 hover:bg-black"
              >
                save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RatingCommentModal;