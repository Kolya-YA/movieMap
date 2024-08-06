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

  const handleItemClick = (event) => {
    // Close the dropdown on item click
    setNavOpen(false);
  };

  const handleClickOutside = (event) => {
    // Close the dropdown if the user clicks outside of it
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setNavOpen(false);
    }
  };



  useEffect(() => {
    // Add event listener to handle clicks outside of the dropdown
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);

    };
  }, []);
  return (
    <nav className="relative">
      <button
        type="button"
        className="flex items-center justify-center p-3 rounded-md hover:bg-gray-700 bg-transparent text-main-text focus:outline-none"
        onClick={toggleNav}
        aria-label="Toggle navigation menu"
        aria-expanded={navOpen}
      >
        {navOpen ? <LuX size={32} /> : <LuMenu size={32} />}
      </button>
      <ul
        ref={dropdownRef}
        id="main-navigation"
        className={`absolute ${navOpen ? '' : 'hidden'} top-full right-0 bg-black bg-opacity-80 text-main-text text-xl text-right w-[200px] p-6 flex flex-col space-y-4 rounded-b-2xl z-10 transition-opacity duration-300 ease-in-out ${navOpen ? 'opacity-100' : 'opacity-0'}`}
      >
        {user ? (
          <>
            <li onClick={handleItemClick}>
              <NavLink to="/profile ">Profile</NavLink>
            </li>
            <li onClick={handleItemClick}>
              <NavLink to="/waiting-list">Watch list</NavLink>
            </li>
            <li onClick={handleItemClick}>
              <NavLink to="/history-list">History</NavLink>
            </li>
            <li onClick={handleItemClick}>
              <NavLink onClick={logoutUser}>Logout</NavLink>
            </li>
            {user.isAdmin && (
              <li onClick={handleItemClick}>
                <NavLink to="/admin">Admin</NavLink>
              </li>
            )}
          </>
        ) : (
          <>
            <li onClick={handleItemClick}>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li onClick={handleItemClick}>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </>
        )}
        <hr />
        <li onClick={handleItemClick}>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li onClick={handleItemClick}>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
