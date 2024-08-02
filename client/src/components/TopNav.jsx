import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LuMenu, LuX } from "react-icons/lu";
import { useUserContext } from "../hooks";

const TopNav = () => {
  const { user, logoutUser } = useUserContext();
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target))   
 {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);   

    };
  }, []);
  return (
    <nav className="relative">
      <button
        type="button"
        className="flex items-center justify-center p-3 rounded-md hover:bg-gray-700 bg-transparent text-white focus:outline-none"
        onClick={toggleNav}
        aria-label="Toggle navigation menu"
        aria-expanded={navOpen}
      >
        {navOpen ? <LuX size={32} /> : <LuMenu size={32} />}
      </button>
      <ul
        ref={dropdownRef}
        id="main-navigation"
        className={`absolute top-full right-0 bg-black bg-opacity-80 text-white text-xl text-right w-[200px] p-6 flex flex-col space-y-4 rounded-b-2xl z-10 transition-opacity duration-300 ease-in-out ${navOpen ? 'opacity-100' : 'opacity-0'}`}
      >
        {user ? (
          <>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/waiting-list">Watch list</NavLink>
            </li>
            <li>
              <NavLink to="/history-list">History</NavLink>
            </li>
            <li>
              <NavLink onClick={logoutUser}>Logout</NavLink>
            </li>
            {user.isAdmin && (
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
            )}
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </>
        )}
        <hr />
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
