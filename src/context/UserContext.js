import React, { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Assuming you are using React Router

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getTokenFromURL = () => new URLSearchParams(location.search).get('token');
  const getUserFromURL = () => new URLSearchParams(location.search).get('user');

  const tokenFromURL = getTokenFromURL();
  const userFromURL = getUserFromURL();

  console.log(userFromURL)
  useEffect(() => {
    if (tokenFromURL && userFromURL) {
      localStorage.setItem('token', tokenFromURL);
      localStorage.setItem('user', JSON.stringify(userFromURL)); // Storing a JSON object for user
      console.log(userFromURL)
      navigate("/dashboard");
    }
  }, [tokenFromURL, userFromURL, navigate]);

  const storedToken = localStorage.getItem('token');
  const storedUser = JSON.parse(localStorage.getItem('user')) || {}; // Parsing stored user data

  const [user, setUser] = useState({
    _id: storedUser._id || "",
    name: storedUser.name || "Avatar",
    email: storedUser.email || "demo.email@domain.com",
    profile_pic: storedUser.profile_pic || "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
    token: storedToken || "",
    isLoggedIn: !!storedToken,
  });

  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/login");
    }
  }, [user.isLoggedIn, navigate]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


