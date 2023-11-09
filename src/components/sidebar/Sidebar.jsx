import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaymentIcon from '@mui/icons-material/Payment';
import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import SidebarMenuButton from "../buttons/sidebarMenuButton";


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarMenuButton href='/' icon={DashboardIcon} text='Dashboard' />
      <SidebarMenuButton href='/session' icon={AccessTimeIcon} text='Session' />
      <SidebarMenuButton href='/payment' icon={PaymentIcon} text='Payment' />
      <SidebarMenuButton href='/profile' icon={PersonIcon} text='Profile' />
    </div>
  )
}

export default Sidebar