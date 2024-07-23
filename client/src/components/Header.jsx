import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from '../contexts'
import TopNav from "./TopNav"

const Header = () => {
    const { user, setUser } = useContext(UserContext)

    return (
        <header className="flex justify-between items-start gap-2 p-2 bg-black">
            {user ? (
                <button className="btn-login" type="button" onClick={() => setUser(null)}>Logout</button>
            ) : (
                <Link to="/login" className="btn-login" type="button">Login</Link>
            )}
            <Link to='/' className="text-2xl font-playfair font-black italic text-white ">MOVIE MAP</Link>
            <TopNav />
        </header>
    )
}

export default Header