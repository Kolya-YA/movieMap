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

    return (
        <form onSubmit={onSubmit}>
            <p>AI advice left for today: {user.aiRequestsLimit * user.aiReqMoviesPerReq - user.movieAiRecs?.length} / {user.aiRequestsLimit * user.aiReqMoviesPerReq}</p>
            <RadioButton text="Alone" value="alone" companion={companion} onChange={(e) => setCompanion(e.target.value)} />
            <RadioButton text="Family" value="family" companion={companion} onChange={(e) => setCompanion(e.target.value)} />
            <RadioButton text="Romantic parner" value="romantic partner" companion={companion} onChange={(e) => setCompanion(e.target.value)} />
            <RadioButton text="Friends" value="friends" companion={companion} onChange={(e) => setCompanion(e.target.value)} />
            <Button
                text={isDisabled ? `Please wait ${countdown}s` : "Request AI advice"}
            />
        </form>
    );
}

export default AiReq;

function RadioButton({ text, value, companion, onChange }) {
    return (
        <label className="flex items-center space-x-2">
            <input
                type="radio"
                value={value}
                checked={companion === value}
                onChange={onChange}
                className="form-radio"
            />
            <span>{text}</span>
        </label>
    );
}