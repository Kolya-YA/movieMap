import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from '../contexts'
import TopNav from "./TopNav"

const Header = () => {
    const { user, setUser, testUser } = useContext(UserContext)

    return (
        <header className="flex justify-between items-start gap-2 p-2 bg-slate-200">
            {user ? (
                <button className="btn-login" type="button" onClick={() => setUser(null)}>Logout</button>
            ) : (
                <button className="btn-login" type="button" onClick={() => setUser(testUser)}>Login</button>
            )}
            <Link to='/' className="text-xl font-semibold">Movie Map</Link>
            <TopNav />
        </header>
    )
}

export default Header