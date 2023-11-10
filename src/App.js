import * as React from 'react';
import './style.scss'
import { useContext } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Home from './pages/home/Home';
import Session from './pages/session';
import Payment from './pages/payment/Payment';
import Profile from './pages/profile/Profile';
import Login from './pages/login';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { useCookies } from 'react-cookie';

// Example authentication state, you should replace this with your authentication logic

function App() {
  const { user, setUser } = useContext(UserContext);
  const { isLoggedIn } = user;
  const [tokenCookie, setTokenCookie, removeTokenCookie] = useCookies(['token']);
  const [userCookie, setUserCookie, removeUserCookie] = useCookies(['user']);
  const navigate = useNavigate();

  // console.log(user)
  const handleLogout = () => {
    removeTokenCookie('token');
    removeUserCookie('user');
    setUser({ ...user, isLoggedIn: false });
    navigate('/login');
  };
  return (
    <div>
      {isLoggedIn && <Header handleLogout={handleLogout} />}
      <div className="main">
        {isLoggedIn && (
          <Sidebar />
        )}
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path='/' element={<Home />} />
              <Route path='/session' element={<Session />} />
              <Route path='/payment' element={<Payment />} />
              <Route path='/profile' element={<Profile />} />
            </>
          ) : (
            <>
              <Route path='*' element={<Navigate replace to="/login" />} />
              <Route path='/login' element={<Login />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
