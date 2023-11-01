import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaymentIcon from '@mui/icons-material/Payment';
import React from 'react'
import {Link} from 'react-router-dom'


const Sidebar = () => {
  return (
   <div className='sidebar'>
    <div className="top">
        <Link to="/">
      <span className="logo">
        Councelor
        </span>
        </Link>
    </div>
    <hr />
    <div className="center">
      <ul>
        <Link to="/">
        <li>
          <DashboardIcon className="iconNew"/>
          <span>Dashboard</span>
        </li>
        </Link>
        <Link to="/session">
        <li>
        <AccessTimeIcon className="iconNew"/>
          <span>Session</span>
        </li>
        </Link>
        <Link to="/payment">
        <li>
          <PaymentIcon className="iconNew"/>
          <span>Payment</span>
        </li>
        </Link>

        <Link to="/profile">
        <li>
          <PaymentIcon className="iconNew"/>
          <span>Profile</span>
        </li>
        </Link>

      </ul>
    </div>
    <div className="bottom">
      <div className="colorOption"></div>
      <div className="colorOption"></div>
      <div className="colorOption"></div>

    </div>

   </div>
  )
}

export default Sidebar