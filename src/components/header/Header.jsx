import React, { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import "./header.scss";
import { UserContext } from '../../context/UserContext';

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']); // 'token' is the name of your cookie
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    removeCookie('token'); // Update this path if your cookie is set to a specific path
    setUser({ ...user, isLoggedIn: false });
    navigate('/login'); // Navigate to login page after removing the token cookie
  };

  return (
    <div className="header">
      <div className="leftSide">
        Counsellor
      </div>
      <div className="rightSide">
        Setting
        {/* Add a button to handle logout */}
        <button onClick={handleLogout} className="logoutButton">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
