import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaymentIcon from '@mui/icons-material/Payment';
import React, { useState } from 'react'
import SidebarMenuButton from "../buttons/sidebarMenuButton";
import RightLeftArrow from "../buttons/rightLeftArrow";


const Sidebar = () => {
  const [expand, setExpand] = useState(true);

  return (
    <div className='sidebar'>
      <div className="right-left-arrow" onClick={() => setExpand(!expand)}>
        <RightLeftArrow expand={expand} />
      </div>
      <div className="sidebar-container">
        <SidebarMenuButton href='/' icon={DashboardIcon} text='Dashboard' expand={expand} />
        <SidebarMenuButton href='/session' icon={AccessTimeIcon} text='Session' expand={expand} />
        <SidebarMenuButton href='/payment' icon={PaymentIcon} text='Payment' expand={expand} />
      </div>
    </div>
  )
}

export default Sidebar