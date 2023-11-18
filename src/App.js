import * as React from 'react';
import './style.scss'
import { useContext } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Session from './pages/session';
import Payment from './pages/payment';
import Profile from './pages/profile/Profile';
import Login from './pages/login';
import Header from './components/header';
import Sidebar from './components/sidebar';
import { useCookies } from 'react-cookie';
import Dashboard from './pages/dashboard';
import Users from './pages/user';
import Feedbacks from './pages/feedbacks';

// Example authentication state, you should replace this with your authentication logic

function App() {
  const { user, setUser } = useContext(UserContext);
  const { isLoggedIn } = user;
  const [tokenCookie, setTokenCookie, removeTokenCookie] = useCookies([
    "token",
  ]);
  const [userCookie, setUserCookie, removeUserCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeTokenCookie("token");
    removeUserCookie("user");
    setUser({ ...user, isLoggedIn: false });
    navigate("/login");
  };
  return (
    <div>
      {isLoggedIn && <Header handleLogout={handleLogout} />}
      <div className="main">
        {isLoggedIn && <Sidebar />}
        <div className={`${isLoggedIn && 'main-content'}`}>
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path='/' element={<Dashboard />} />
                <Route path='/session' element={<Session />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/users' element={<Users />} />
                <Route path='/feedbacks' element={<Feedbacks />} />
              </>
            ) : (
              <>
                <Route path="*" element={<Navigate replace to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Login />} />
                <Route path="/password-reset" element={<Login />} />
              </>
            )}
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;

// Webinar Feature
// Reward points
// Admin Approval of profile
// Counsellor have to register first with payment
// purchase domain for server
// webinar recording feature - show recordings on the panel