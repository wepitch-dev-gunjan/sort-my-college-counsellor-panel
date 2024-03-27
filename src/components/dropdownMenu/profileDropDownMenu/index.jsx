import React, { useContext, useRef, useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import "./style.scss";
import useClickOutside from "../../../customHooks/useClickOutside";
import PersonIcon from "@mui/icons-material/Person";
import { AiOutlineLogout } from "react-icons/ai";
import DropDownMenuButton from "../dropDownMenuButton";
import { useNavigate } from "react-router-dom";
import { MdOutlineSummarize } from "react-icons/md";
import { MediaQueryContext } from "../../../context/MediaQueryContext";
import { GrAdd } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NotificationContext } from "../../../context/NotificationContext";


const ProfileDropDownMenu = ({ name, image, onClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { setNotificationsEnable } = useContext(NotificationContext);
  const { smallScreen, xSmallScreen } = useContext(MediaQueryContext);
  useClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

// function to generate avatar from name
const generateAvatarFromName = (name)=>{
 if(!name)return "";
 const partsName = name.split(" ");
 const firstName =partsName[0].charAt(0).toUpperCase();
 const lastname =  partsName[partsName.length -1].charAt(0).toUpperCase();
 return `${firstName}${lastname}`;
};
console.log("name",name);
console.log("generated Avatar",generateAvatarFromName(name));

  return (
    <div className="ProfileDropDownMenu-container" onClick={toggleDropdown}>
      <div className="left">
    {image ? (
    <img src={image} alt="" />
    ):(  
<div className="avatar">{generateAvatarFromName(name)}</div>
    )}
    </div>
     {/* {image != img_default ? <img src={image} alt="" /> : <div className="avatar">{generateAvatarFromName(name)}</div>}
    </div> */}
      { !xSmallScreen && <div className="mid">
        <p className="top">Hello</p>
        <h4>{name}</h4>
      </div>}
      <div className="right">
        <BiChevronDown />
      </div>
      {isDropdownOpen && (
        <div ref={dropdownRef} className="dropdown-menu">
          <DropDownMenuButton
            onClick={() => navigate("/profile")}
            icon={PersonIcon}
            text="Profile"
          />
          {/* {smallScreen && (
            <DropDownMenuButton
              onClick={() => ""}
              icon={MdOutlineSummarize}
              text="Summary"
            />
          )} */}
          <DropDownMenuButton
            onClick={onClick}
            icon={AiOutlineLogout}
            text="Log out"
          />
          {xSmallScreen && (
          <>
            <DropDownMenuButton
              onClick={() => navigate("/session")}
              icon={GrAdd}
              text="Add Session"
            /> 
            <DropDownMenuButton
              onClick={() => setNotificationsEnable((prev) => !prev)}
              icon={IoMdNotificationsOutline}
              text="Notifications"
            /> 
          </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileDropDownMenu;
