import { Button } from ".";
import { useUserContext } from "../hooks";

const AiReq = () => {
    const { user, getAiRecs } = useUserContext();;

    const onClick = (e) => {
        e.preventDefault();
        getAiRecs();
    }
    
    if (!user) {
        return <p>Loading...</p>
    }
    
    return (
        <div>
            <form>
                <p>AI advice left for today: {user.aiRequestsLimit * user.aiReqMoviesPerReq - user.movieAiRecs?.length} / {user.aiRequestsLimit * user.aiReqMoviesPerReq }</p>
                <Button text="Request AI advice" onClick={onClick} />
            </form>
            <p>Fake data AI functions not yet implemented</p>
        </div>
    );
}

export default AiReq;