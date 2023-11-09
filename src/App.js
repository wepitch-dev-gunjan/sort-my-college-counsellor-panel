import * as React from 'react';
import './style.scss'
import { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Home from './pages/home/Home';
import Session from './pages/session';
import Payment from './pages/payment/Payment';
import Profile from './pages/profile/Profile';
import Login from './pages/login';

// Example authentication state, you should replace this with your authentication logic

function App() {
  const { user, setUser } = useContext(UserContext);
  const { isLoggedIn } = user;
  return (
    <BrowserRouter>
      <div className='App'>
        {/* {isLoggedIn && <Header />}
        {isLoggedIn && <Sidebar />} */}
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
    </BrowserRouter>
  );
}

export default App;
