import { Link } from "react-router-dom"
import { useUserContext } from "../hooks"
import TopNav from "./TopNav"
import { LuLogIn, LuLogOut } from "react-icons/lu";

const Header = () => {
    const { user, logoutUser } = useUserContext();

    return (
        <header className="flex justify-between items-center  gap-2 p-2 bg-black">
            {user ? (
                <button className="p-2 ml-2 bg-white/20 text-main-text font-semibold rounded-lg hover:bg-white/40 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75" type="button" onClick={logoutUser}>
                    <LuLogOut size={20} />
                    <span className="sr-only">Logout</span>
                </button>
            ) : (
                    <Link to="/login" className="p-2 ml-2bg-white/20 text-main-text font-semibold rounded-lg hover:bg-white/40 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75" type="button">
                    <LuLogIn size={20} />
                    <span className="sr-only">Login</span>
                </Link>
            )}
            <Link to='/' className="text-4xl font-playfair font-black italic text-main-text ">Movie Map</Link>
            <TopNav />
        </header>
    )
}

export default Header