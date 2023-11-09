import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [cookies] = useCookies(['token']); // 'token' is the name of your cookie
  const [userCookie] = useCookies(['user']); // 'token' is the name of your cookie

  // Initialize the user state with the token and isLoggedIn properties
  const [user, setUser] = useState({
    token: cookies.token || '', // Set the token from the cookies
    isLoggedIn: !!cookies.token,  // !! converts a truthy or falsy value to a boolean true or false
    email: userCookie.user.email, name: userCookie.user.name, profile_pic: userCookie.user.picture
  });

  // The rest of your component remains unchanged
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
