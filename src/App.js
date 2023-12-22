import * as React from "react";
import "./style.scss";
import { useContext } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Session from "./pages/session";
import Payment from "./pages/payment";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Users from "./pages/user";
import Feedbacks from "./pages/feedbacks";
import MyFeeds from "./pages/myfeeds";
import Notifications from "./components/notifications";
import { NotificationContext } from "./context/NotificationContext";
import { useRef } from "react";
import useClickOutside from "./customHooks/useClickOutside";
import { ToastContainer } from "react-toastify";
import { SessionContext } from "./context/SessionContext";
import AddSession from "./components/addSession";
import { ProfileContext } from "./context/ProfileContext";
import AddProfilePic from "./components/profilePic/addProfilePic";

function App() {
  const addProfilePicRef = useRef(null);
  const { user, setUser } = useContext(UserContext);
  const { addMode, setAddMode, sessions, setSessions } =
    useContext(SessionContext);
  const { profilePicEditMode, setProfilePicEditMode } =
    useContext(ProfileContext);
  const notificationRef = useRef(null);
  const { notificationsEnable, setNotificationsEnable } =
    useContext(NotificationContext);
  const { isLoggedIn } = user;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser({ ...user, isLoggedIn: false });
    navigate("/login");
  };

  useClickOutside(addProfilePicRef, () => {
    setProfilePicEditMode((prev) => !prev);
  });

  useClickOutside(notificationRef, () => {
    setNotificationsEnable(false);
  });

  return (
    <div>
      {addMode && (
        <div className="add-session-container">
          <AddSession
            sessions={sessions}
            setSessions={setSessions}
            setAddMode={setAddMode}
          />
        </div>
      )}
      {isLoggedIn && <Header handleLogout={handleLogout} />}
      <div className="main">
        <ToastContainer />

        {profilePicEditMode && (
          <div className="add-profile-pic-panel">
            <AddProfilePic ref={addProfilePicRef} />
          </div>
        )}
        {notificationsEnable && <Notifications ref={notificationRef} />}

        {isLoggedIn && <Sidebar />}
        <div className={`${isLoggedIn && "main-content"}`}>
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/session" element={<Session />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/users" element={<Users />} />
                <Route path="/feeds" element={<MyFeeds />} />
                <Route path="/feedbacks" element={<Feedbacks />} />
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
// webinar recording feature - show recordings on the panel
