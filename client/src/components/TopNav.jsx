import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LuMenu, LuX } from 'react-icons/lu'   

const TopNav = () => {
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
                <li><NavLink to='/' onClick={toggleNav}>Home</NavLink></li>
                <li><NavLink to='/' onClick={toggleNav}>Movies</NavLink></li>
                <li><NavLink to='/about' onClick={toggleNav}>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default TopNav