import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from './SearchBox';
import { logout } from '../slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.userInfo);

  const [catFact, setCatFact] = useState('');
  // 1. New State for the dropdown menu
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        setCatFact(data.fact);
      } catch (error) {
        console.error('Error fetching cat fact:', error);
      }
    };
    fetchFact();
  }, []);

  const logoutHandler = () => {
    setDropdownOpen(false); // Close menu on logout
    dispatch(logout());
    navigate('/');
  };

  // Helper to close menu when clicking Profile
  const closeMenu = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      {catFact && (
        <div className="bg-indigo-600 text-white text-xs py-2 px-4 text-center font-medium tracking-wide">
          🐱 <span className="opacity-90">Random Cat Fact:</span> {catFact}
        </div>
      )}

      <header className="bg-gray-900 text-gray-100 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-teal-400 to-sky-500 flex items-center justify-center font-bold text-black">
              BV
            </div>
            <span className="text-xl font-semibold">BookVerse</span>
          </Link>

          <div className="flex-1 mx-6">
            <div className="max-w-2xl mx-auto">
              <SearchBox />
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <Link
              to="/cart"
              className="text-lg font-semibold hover:text-purple-300 transition"
            >
              Cart
            </Link>

            {userInfo ? (
              <div className="relative">
                {/* 2. Changed to onClick to toggle the menu */}
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded transition focus:outline-none"
                >
                  {userInfo.name}
                  {/* Optional: Add a small arrow icon */}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>

                {/* 3. Conditional Rendering based on state (Not CSS Hover) */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded shadow-lg z-50">
                    <Link
                      to="/profile"
                      onClick={closeMenu}
                      className="block px-4 py-2 hover:bg-gray-700 transition"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={logoutHandler}
                      className="w-full text-left px-4 py-2 hover:bg-gray-700 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="hover:text-sky-300">
                Sign In
              </Link>
            )}

            {userInfo && userInfo.isAdmin && (
              <Link to="/admin/productlist" className="hover:text-sky-300">
                Admin
              </Link>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;