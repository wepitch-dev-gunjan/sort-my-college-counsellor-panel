import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import './style.scss';

const ProfileDropDownMenu = ({ name, image }) => {
  return (
    <div className='ProfileDropDownMenu-container'>
      <div className="left">
        <img src={image} alt="" />
      </div>
      <div className="mid">
        <p className="top">Hello</p>
        <h4>{name}</h4>
      </div>
      <div className="right">
        <BiChevronDown />
      </div>
    </div>
  );
};

export default ProfileDropDownMenu;
