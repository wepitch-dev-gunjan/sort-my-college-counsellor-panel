import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const SidebarMenuButton = ({ href, icon: Icon, text, expand }) => {
  return (
    <Link to={href}>
      <div className='SidebarMenuButton-container' style={{ width: `${expand ? '250px' : ''}` }}>
        <li className='inner-container'>
          <Icon />
          {expand && <span>{text}</span>}
        </li>
      </div>
    </Link>
  );
};

export default SidebarMenuButton;
