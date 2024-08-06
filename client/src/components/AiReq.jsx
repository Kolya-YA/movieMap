import { useEffect, useState } from "react";
import { Button } from ".";
import { useUserContext } from "../hooks";
const DELAY = 10;

const AiReq = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [countdown, setCountdown] = useState(DELAY);
    const [companion, setCompanion] = useState("alone");
    const { user, getAiRecs } = useUserContext();
    useEffect(() => {
        let timer;
        if (isDisabled) {
            timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        }

        if (countdown === 0) {
            setIsDisabled(false);
            setCountdown(DELAY);
        }
        return () => clearInterval(timer);
    }, [isDisabled, countdown])

    const onSubmit = (e) => {
        e.preventDefault();
        setIsDisabled(true);
        getAiRecs(companion);
    }

    if (!user) {
        return <p>Loading...</p>
    }
    const credits = user.aiRequestsLimit - user.movieAiRecs?.length / user.aiReqMoviesPerReq;

    return (
        <form onSubmit={onSubmit} className="grid gap-2 justify-center">
            <div className="flex justify-center gap-[1px]">
                <RadioButton text="Alone" value="alone" companion={companion} onChange={(e) => setCompanion(e.target.value)} />
                <RadioButton text="Family" value="family" companion={companion} onChange={(e) => setCompanion(e.target.value)} />
                <RadioButton text="Romantic" value="romantic partner" companion={companion} onChange={(e) => setCompanion(e.target.value)} />
                <RadioButton text="Friends" value="friends" companion={companion} onChange={(e) => setCompanion(e.target.value)} />
            </div>
            <Button
                isDisabled={credits <= 0}
                text={isDisabled ? `Please wait ${countdown}s` : `AI recs (${credits})`}
            />
        </form>
    );
}

export default AiReq;

function RadioButton({ text, value, companion, onChange }) {
    return (
        <label className="
            px-3 py-2 cursor-pointer
            bg-black/40 border-2 border-black first-of-type:rounded-l-md last-of-type:rounded-r-md
            has-[:checked]:bg-white/80 has-[:checked]:text-black
            transition-colors
            ">
            <input
                type="radio"
                value={value}
                checked={companion === value}
                onChange={onChange}
                className="hidden"
            />
            {text}
        </label>
    );
}