import { Link } from "react-router-dom"
import { useUserContext } from "../hooks"
import TopNav from "./TopNav"

const Header = () => {
    const { user, userLogout } = useUserContext();

    return (
        <header className="flex justify-between items-start gap-2 p-2 bg-black">
            {user ? (
                <button className="btn-login" type="button" onClick={userLogout}>Logout</button>
            ) : (
                <Link to="/login" className="btn-login" type="button">Login</Link>
            )}
            <Link to='/' className="text-2xl font-playfair font-black italic text-white ">MOVIE MAP</Link>
            <TopNav />
        </header>
    )
}

export default Header