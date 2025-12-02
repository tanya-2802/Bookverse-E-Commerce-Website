
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from './SearchBox';
import { logout } from '../slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.userInfo);

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className="bg-gray-900 text-gray-100 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-teal-400 to-sky-500 flex items-center justify-center font-bold text-black">BV</div>
          <span className="text-xl font-semibold">BookVerse</span>
        </Link>

        <div className="flex-1 mx-6">
          <div className="max-w-2xl mx-auto">
            <SearchBox />
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <Link
  to='/cart'
  className='text-lg font-semibold hover:text-purple-300 transition'
>
  Cart
</Link>

          {userInfo ? (
            <div className="relative group">
              <button className="flex items-center gap-2">
                {userInfo.name}
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Link to="/profile" className="block px-3 py-2 hover:bg-gray-700">Profile</Link>
                <button onClick={logoutHandler} className="w-full text-left px-3 py-2 hover:bg-gray-700">Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="hover:text-sky-300">Sign In</Link>
          )}

          {userInfo && userInfo.isAdmin && (
            <Link to="/admin/productlist" className="hover:text-sky-300">Admin</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;


