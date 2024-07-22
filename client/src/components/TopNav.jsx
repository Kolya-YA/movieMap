import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { UserContext } from '../contexts'
import { LuMenu, LuX } from 'react-icons/lu'

const TopNav = () => {
    const { user } = useContext(UserContext)
    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => { setNavOpen(!navOpen) }
    return (
        <nav className='grid'>
            <button type='button'
                onClick={toggleNav}
                aria-label='Toggle navigation menu'
                aria-controls='main-navigation'
                aria-expanded={navOpen}
            >
                {navOpen
                    ? <LuX size={24} aria-hidden='true' className='ms-auto' />
                    : <LuMenu size={24} aria-hidden='true' className='ms-auto' />
                }
            </button>
            <ul
                id='main-navigation'
                className={`${navOpen ? 'block' : 'hidden'}`}
            >
                {user
                    ? (
                        <>
                            <li><NavLink to='/profile' onClick={toggleNav}>Profile</NavLink></li>
                            <li><NavLink to='/logout' onClick={toggleNav}>Logout</NavLink></li>
                            { user.isAdmin && <li><NavLink to='/admin' onClick={toggleNav}>Admin</NavLink></li> }
                        </>
                    )
                    : (
                        <>
                            <li><NavLink to='/login' onClick={toggleNav}>Login</NavLink></li>
                            <li><NavLink to='/signup' onClick={toggleNav}>Signup</NavLink></li>
                        </>
                    )}
                <hr/>
                <li><NavLink to='/search' onClick={toggleNav}>Search movies</NavLink></li>
                <li><NavLink to='/about' onClick={toggleNav}>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default TopNav