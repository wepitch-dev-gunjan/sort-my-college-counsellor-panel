import React, { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const cookieValue = document.cookie;
  console.log("cookies", cookieValue);
  const [cookies] = useCookies(["token", "user"]);
  const navigate = useNavigate();
  // Initialize the user state with the token and isLoggedIn properties
  const [user, setUser] = useState({
    _id: cookies.user?._id || "",
    name: cookies.user?.name || "",
    email: cookies.user?.email || "",
    profile_pic: cookies.user?.profile_pic || "",
    token: cookies?.token || "",
    isLoggedIn: !!cookies.token,
    // isLoggedIn: true,
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
