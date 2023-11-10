import React, { useContext } from 'react';
import "./header.scss";
import { UserContext } from '../../context/UserContext';
import ProfileDropDownMenu from '../dropdownMenu/profileDropDownMenu';
import logo from '../../assets/logo.svg';

const Header = ({ handleLogout }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="header">
      <div className="leftSide">
        <img src={logo} alt="" />
      </div>
      <div className="rightSide">
        <ProfileDropDownMenu name={user.name} image={user.profile_pic} onClick={handleLogout} />
      </div>
    </div>
  );
};

export default Header;
