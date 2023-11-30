import { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [editProfileEnable, setEditProfileEnable] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    designation: "React Developer @ Wepitch",
    followers_count: 0,
    experience_in_years: 5,
    phone: "1236547920",
    total_sessions_attended: 0,
    how_will_i_help: [],
    qualifications: ["Sample Qualification 1", "Sample Qualification 2"],
    languages_spoken: ["English", "Hindi", "Malyalam", "Spanish"],
    location: {
      pin_code: 123456,
      city: "Sample City",
      state: "Sample State",
      country: "Sample Country",
    },
    gender: "Male",
    age: 34,
    nationality: "Indian",
    counselling_approach: "Google meeting online",
    client_testimonials: [],
    group_session_price: "1000",
    personal_session_price: "5000",
    verified: false,
  });

  const [profilePicEditMode, setProfilePicEditMode] = useState(false);
  const [coverImageEditMode, setCoverImageEditMode] = useState(false);
  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
        profilePicEditMode,
        coverImageEditMode,
        setCoverImageEditMode,
        setProfilePicEditMode,
        editProfileEnable,
        setEditProfileEnable,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
