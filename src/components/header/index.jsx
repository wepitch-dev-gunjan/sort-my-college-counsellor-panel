import React, { useContext, useRef } from "react";
import "./style.scss";
import { UserContext } from "../../context/UserContext";
import ProfileDropDownMenu from "../dropdownMenu/profileDropDownMenu";
import logo from "../../assets/logo.svg";
import AddSessionButton from "../buttons/addSessionButton";
import NotificationButton from "../notificationButton";
import { NotificationContext } from "../../context/NotificationContext";
import useClickOutside from "../../customHooks/useClickOutside";
import VerifyProfilePopup from "../verifyProfilePopup";
import { ProfileContext } from "../../context/ProfileContext";

const Header = ({ handleLogout }) => {
  const notificationRef = useRef(null);
  useClickOutside(notificationRef, () => {
    setNotificationsEnable(false);
  })
  const { user } = useContext(UserContext);
  const { profile } = useContext(ProfileContext)
  const { setNotificationsEnable } = useContext(NotificationContext);

  return (
    <div className="header">
      <div className="leftSide">
        <img src={logo} alt="" />
      </div>
      <div className="rightSide">
        {!profile.verified && <VerifyProfilePopup />}
        <AddSessionButton />
        <NotificationButton
          ref={notificationRef}
          onClick={() => setNotificationsEnable((prev) => !prev)}
        />
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
