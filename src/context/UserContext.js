import React, { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getTokenFromURL = () => new URLSearchParams(location.search).get('token');
  const getUserFromURL = () => new URLSearchParams(location.search).get('user');

  const tokenFromURL = getTokenFromURL();
  const userFromURL = getUserFromURL();

  const storedToken = localStorage.getItem('token') || '';
  const storedUser = JSON.parse(JSON.parse(localStorage.getItem('user'))) || {}; // Parsing stored user data

  console.log(storedUser)
  const [user, setUser] = useState({});

  useEffect(() => {
    if (tokenFromURL && userFromURL) {
      localStorage.setItem('token', tokenFromURL);
      localStorage.setItem('user', JSON.stringify(userFromURL));
      setUser({
        _id: userFromURL?._id || "",
        name: userFromURL?.name || "Avatar",
        email: userFromURL?.email || "demo.email@domain.com",
        profile_pic: userFromURL?.profile_pic || "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
        token: tokenFromURL,
        isLoggedIn: true,
      });
      navigate("/dashboard");
    }
  }, [tokenFromURL, userFromURL, navigate]);

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
