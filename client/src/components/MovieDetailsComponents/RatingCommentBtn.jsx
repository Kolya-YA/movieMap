import { useState } from 'react';
import { LuPencil, LuEye } from 'react-icons/lu';
import { RatingCommentDialog } from './';

const RatingCommentBtn = ({ movieToAdd }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const movieDateOfWatch = movieToAdd?.dateOfWatch;

    return (
        <>
            <button
                type="button"
                onClick={() => setIsDialogOpen(true)}
                className="rounded-sm px-2 border bg-white/30"
            >
                {movieDateOfWatch
                    ? (<>
                        <LuPencil size={20} className="inline" aria-hidden="true" /> Change my history
                    </>)
                    : (<>
                        <LuEye size={20} className="inline" aria-hidden="true" /> Add to history
                    </>)
                }
            </button>
            <RatingCommentDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
            />
        </>
    );
};

export default RatingCommentBtn;