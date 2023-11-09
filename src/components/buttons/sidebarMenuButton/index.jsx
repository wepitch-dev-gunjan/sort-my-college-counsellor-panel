import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const SidebarMenuButton = ({ href, icon: Icon, text }) => {
  return (
    <div className='SidebarMenuButton-container'>
      <Link to={href}>
        <li className='inner-container'>
          <Icon />
          <span>{text}</span>
        </li>
      </Link>
    </div>
  );
};

export default SidebarMenuButton;
