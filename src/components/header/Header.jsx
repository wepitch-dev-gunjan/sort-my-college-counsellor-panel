import React, { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import "./header.scss";
import { UserContext } from '../../context/UserContext';
import ProfileDropDownMenu from '../dropdownMenu/profileDropDownMenu';
import logo from '../../assets/logo.svg'

const Header = () => {
  const [tokenCookie, setTokenCookie, removeTokenCookie] = useCookies(['token']);
  const [userCookie, setUserCookie, removeUserCookie] = useCookies(['user']);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  // console.log(user)
  const handleLogout = () => {
    removeTokenCookie('token');
    removeUserCookie('user');
    setUser({ ...user, isLoggedIn: false });
    navigate('/login');
  };

  return (
    <div className="header">
      <div className="leftSide">
        <img src={logo} alt="" />
      </div>
      <div className="rightSide">
        <ProfileDropDownMenu name={user.name} image={user.profile_pic} />
      </div>
    </div>
  );
};

export default Header;
