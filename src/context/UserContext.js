// UserContext.js
import React, { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    _id: "",
    name: "Avatar",
    email: "demo.email@domain.com",
    profile_pic: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
    token: "",
    isLoggedIn: false,
  });
  const location = useLocation();
  const navigate = useNavigate();

  const getTokenFromURL = () => new URLSearchParams(location.search).get('token');
  const getUserFromURL = () => new URLSearchParams(location.search).get('user');

  const authenticateUser = () => {
    return new Promise((resolve, reject) => {
      const tokenFromURL = getTokenFromURL();
      const userFromURL = getUserFromURL();

      if (tokenFromURL && userFromURL) {
        localStorage.setItem('token', tokenFromURL);
        localStorage.setItem('user', JSON.stringify(userFromURL));
        const updatedUser = {
          _id: userFromURL?._id || "",
          name: userFromURL?.name || "Avatar",
          email: userFromURL?.email || "demo.email@domain.com",
          profile_pic: userFromURL?.profile_pic || "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
          token: tokenFromURL,
          isLoggedIn: true,
        };
        resolve(updatedUser);
      } else {
        reject("Authentication failed");
      }
    });
  };

  useEffect(() => {
    authenticateUser()
      .then((user) => {
        setUser(updatedUser);
        setIsAuthenticated(true);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error)
        navigate("/login");
      });
  }, [navigate]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {isAuthenticated && children}
    </UserContext.Provider>
  );
};
