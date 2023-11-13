import React, { useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import './style.scss';
import useClickOutside from '../../../customHooks/useClickOutside';
import PersonIcon from '@mui/icons-material/Person';
import { AiOutlineLogout } from 'react-icons/ai';
import DropDownMenuButton from '../dropDownMenuButton';
import { useNavigate } from 'react-router-dom';

const ProfileDropDownMenu = ({ name, image, onClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div className='ProfileDropDownMenu-container' onClick={toggleDropdown}>
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
      {isDropdownOpen && (
        <div ref={dropdownRef} className="dropdown-menu">
          <DropDownMenuButton onClick={() => navigate('/profile')} icon={PersonIcon} text='Profile' />
          <DropDownMenuButton onClick={onClick} icon={AiOutlineLogout} text='Log out' />
        </div>
      )}
    </div>
  );
};

export default ProfileDropDownMenu;
