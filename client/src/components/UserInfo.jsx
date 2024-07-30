import { Link } from "react-router-dom";

const UserInfo = ({ user }) => {
    return (
        <section>
            <h2 className="text-lg font-semibold">Current User info:</h2>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Admin: {user.isAdmin ? "Yes" : "No"}</p>
            <div className="flex justify-evenly">
                <Link to='/waiting-list' className="text-blue-800 underline">Waiting list</Link>
                <Link to='/history-list' className="text-blue-800 underline">History list</Link>
            </div>

        </section>
    )
}

export default UserInfo;
