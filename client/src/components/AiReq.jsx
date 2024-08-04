import { Button } from ".";
import { useUser } from "../hooks";

const AiReq = () => {
    const { user, getAiRecs } = useUser();

    const onClick = (e) => {
        e.preventDefault();
        getAiRecs();
    }
    
    if (!user) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <form action="">
                <p>AI requests left for today: {user.aiRequestsLimit - user.movAIRecs.length} / {user.aiRequestsLimit}</p>
                <Button text="Request AI advise" onClick={onClick} />
            </form>
            <p>AI list not yet implemented</p>
        </div>
    );
}

export default AiReq;