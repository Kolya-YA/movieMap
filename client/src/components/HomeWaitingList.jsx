import { Link } from "react-router-dom";

const HomeWaitingList = () => {
    return (
        <>
            <hr />
            <h2>My waiting list</h2>
            <ul>
                <li>1. The Shawshank Redemption (1994) - 9.2</li>
                <li>2. The Godfather (1972) - 9.1</li>
                <li>3. The Dark Knight (2008) - 9.0</li>
            </ul>
            <Link to='/waiting-list' className="text-blue-500 hover:underline">To full waiting list</Link>
            <hr />
        </>
    )
}

export default HomeWaitingList;