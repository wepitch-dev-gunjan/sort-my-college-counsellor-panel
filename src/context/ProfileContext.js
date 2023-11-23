import { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  
  const [profilePicEditMode, setProfilePicEditMode] = useState(false);
  return <ProfileContext.Provider value={{ profile, setProfile, profilePicEditMode, setProfilePicEditMode }}>
    {children}
  </ProfileContext.Provider>
}