import React, { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Assuming you are using React Router

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to extract token from URL query parameters
  const getTokenFromURL = () => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('token');
  };

  // Get the token from the URL
  const tokenFromURL = getTokenFromURL();

  // Save the token to localStorage
  useEffect(() => {
    if (tokenFromURL) {
      localStorage.setItem('token', tokenFromURL);
      navigate("/"); // Redirect to the homepage or desired route after saving the token
    }
  }, [tokenFromURL, navigate]);

  // Retrieve user information from localStorage
  const storedUser = localStorage.getItem('user');
  const [user, setUser] = useState(
    storedUser ? JSON.parse(storedUser) : {
      _id: "",
      name: "Avatar",
      email: "demo.email@domain.com",
      profile_pic: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      token: "",
      isLoggedIn: false,
    }
  );

  // Store user information in localStorage
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  // Redirect to login page if there is no token
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/login"); // Adjust the path based on your route setup
    }
  }, [user.isLoggedIn, navigate]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

