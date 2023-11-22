import React, { useContext } from "react";
import "./style.scss";
import { UserContext } from "../../context/UserContext";
import ProfileDropDownMenu from "../dropdownMenu/profileDropDownMenu";
import logo from "../../assets/logo.svg";
import AddSessionButton from "../buttons/addSessionButton";
import Notification from "../notification";

const Header = ({ handleLogout }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="header">
      <div className="leftSide">
        <img src={logo} alt="" />
      </div>
      <div className="rightSide">
        <AddSessionButton />
        <Notification />
        <ProfileDropDownMenu
          name={user.name}
          image={user.profile_pic}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default Header;
