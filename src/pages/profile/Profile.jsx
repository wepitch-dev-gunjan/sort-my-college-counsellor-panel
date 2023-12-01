import "./profile.scss";
import { useContext, useState } from "react";
import ProfilePic from "../../components/profilePic";
import CoverImage from "../../components/coverImage";
import { UserContext } from "../../context/UserContext";
import BasicInfo from "../../components/basicInfo";
import ContactInfo from "../../components/contactInfo";
import OtherInfo from "../../components/otherInfo";
import EducationInfo from "../../components/educationInfo";
import { ProfileContext } from "../../context/ProfileContext";
import Document from "../../components/document";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const { profile, setProfile } = useContext(ProfileContext);
  const [initialUserProfileBackup, setInitialUserProfileBackup] =
    useState(profile);
  const { editProfileEnable, setEditProfileEnable } =
    useContext(ProfileContext);

  const [coverImage, setCoverImage] = useState(
    "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
  );

  // Function to handle saving changes
  const handleSave = () => {
    setInitialUserProfileBackup(profile);
    setEditProfileEnable(false);
  };

  // Function to handle cancelling changes
  const handleCancel = () => {
    setProfile(initialUserProfileBackup);
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
            <h3>{profile.designation}</h3>
          </div>
          <div className="middle">
            <BasicInfo
              email={profile.email}
              age={profile.age}
              gender={profile.gender}
              editProfileEnable={editProfileEnable}
            />
            <ContactInfo
              phone={profile.phone}
              location={profile.location}
              editProfileEnable={editProfileEnable}
            />
            <OtherInfo
              years={profile.experience_in_years}
              languages={profile.languages_spoken}
              group_session_price={profile.group_session_price}
              personal_session_price={profile.personal_session_price}
              counsellingApproach={profile.counselling_approach}
              nationality={profile.nationality}
              editProfileEnable={editProfileEnable}
            />
            <EducationInfo
              qualifications={profile.qualifications}
              editProfileEnable={editProfileEnable}
            />
            <Document
              // qualifications={profile.qualifications}
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
