import React, { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user"]);
  console.log(cookies);
  // Initialize the user state with the token and isLoggedIn properties
  const [user, setUser] = useState({
    _id: cookies.user?._id || "",
    name: cookies.user?.name || "Avatar",
    email: cookies.user?.email || "demo.email@domain.com",
    profile_pic:
      cookies.user?.profile_pic ||
      "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
    token: cookies.token || "",
    // isLoggedIn: !!cookies.token,
    isLoggedIn: true,
  });

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
