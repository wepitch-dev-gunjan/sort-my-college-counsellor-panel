import EditProfile from "../../components/editProfile";
import "./profile.scss";
import { useContext, useState } from "react";
import ProfileImages from "../../components/profileImages/ProfileImages";
import ProfilePic from "../../components/profilePic";
import CoverImage from "../../components/coverImage";
import { UserContext } from "../../context/UserContext";
import Users from "../user";
import BasicInfo from "../../components/basicInfo";
import ContactInfo from "../../components/contactInfo";
import OtherInfo from "../../components/otherInfo";

const Profile = () => {
  // COde start for form
  const { user, setUser } = useContext(UserContext);
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    designation: "React Developer@ Wepitch",
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
    client_testimonials: [],
    group_session_price: null,
    personal_session_price: null,
  });

  const [coverImage, setCoverImage] = useState(
    "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
  );

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // code end for form

  return (
    <div className="Profile-container">
      <div className="profile-body">
        <CoverImage src={coverImage} />
        <div className="profile-pic">
          <ProfilePic src={user.profile_pic} />
        </div>
        <div className="profile-info">
          <div className="top">
            <h1>{user.name}</h1>
            <h3>{userProfile.designation}</h3>
          </div>

          <div className="middle">
            <BasicInfo
              email={userProfile.email}
              age={userProfile.age}
              gender={userProfile.gender}
            />
            <ContactInfo
              phone={userProfile.phone}
              location={userProfile.location}
            />
            <OtherInfo
              years={userProfile.experience_in_years}
              languages={userProfile.languages_spoken}
            />
          </div>

          <div className="bottom"></div>
        </div>
      </div>
      {/* <ProfileImages /> */}
      {/* <button onClick={openPopup}>Open Popup</button>
            <button onClick={openPopup}>New Popup</button> */}

      {/* <EditProfile isOpen={isPopupOpen} onClose={closePopup} /> */}
    </div>
  );
};

export default Profile;
