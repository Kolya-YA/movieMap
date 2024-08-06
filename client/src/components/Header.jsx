import { Link } from "react-router-dom"
import TopNav from "./TopNav"
import { LuSearch } from "react-icons/lu";
import logo from "../assets/logo.png";

const Header = () => {

    return (
        <header className="flex justify-between items-center gap-1 bg-black">
            <div className="flex gap-2 px-2">
                <img src={logo} alt="MovieMap logo" width={40} />
                <Link to='/' className="text-4xl font-title font-black text-main-text">Movie Map</Link>
            </div>
            <div className="flex gap-1">
                <Link to="search" className="p-3 pt-4 ml-2bg-white/20 text-main-text font-semibold rounded-lg hover:bg-white/40 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75" type="button">
                    <LuSearch size={26} className="" />
                    <span className="sr-only">Search movie</span>
                </Link>
                <TopNav />
            </div>
        </header>
    )
}

export default Header