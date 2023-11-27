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
import EducationInfo from "../../components/educationInfo";

const Profile = () => {
  // COde start for form
  const { user, setUser } = useContext(UserContext);
  const initialUserProfile = {
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
    nationality: 'Indian',
    counselling_approach: 'Google meeting online',
    client_testimonials: [],
    group_session_price: "12365",
    personal_session_price: "78965",
  };
  const [userProfile, setUserProfile] = useState(initialUserProfile);
  const [initialUserProfileBackup, setInitialUserProfileBackup] = useState(
    initialUserProfile
  );
  const [editProfileEnable, setEditProfileEnable] = useState(false)

  const [coverImage, setCoverImage] = useState(
    "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
  );

  // Function to handle saving changes
  const handleSave = () => {
    setInitialUserProfileBackup(userProfile);
    setEditProfileEnable(false);
  };

  // Function to handle cancelling changes
  const handleCancel = () => {
    setUserProfile(initialUserProfileBackup);
    setEditProfileEnable(false);
  };


  return (
    <div className="Profile-container">
      <div className="profile-body">
        <CoverImage src={coverImage} />
        <div className="profile-pic">
          <ProfilePic src={user.profile_pic} />
        </div>
        <div className="edit-profile">
          <div
            className="edit-profile-button"
            onClick={() => setEditProfileEnable(true)}
          >
            Edit profile
          </div>
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
              editProfileEnable={editProfileEnable}
            />
            <ContactInfo
              phone={userProfile.phone}
              location={userProfile.location}
              editProfileEnable={editProfileEnable}
            />
            <OtherInfo
              years={userProfile.experience_in_years}
              languages={userProfile.languages_spoken}
              group_session_price={userProfile.group_session_price}
              personal_session_price={userProfile.personal_session_price}
              counsellingApproach={userProfile.counselling_approach}
              nationality={userProfile.nationality}
              editProfileEnable={editProfileEnable}
            />
            <EducationInfo
              qualifications={userProfile.qualifications}
              editProfileEnable={editProfileEnable}
            />
          </div>
          <div className="bottom">
            {editProfileEnable && (
              <div className="buttons">
                <div className="edit-profile-button" onClick={handleSave}>
                  Save
                </div>
                <div className="edit-profile-button" onClick={handleCancel}>
                  Cancel
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
