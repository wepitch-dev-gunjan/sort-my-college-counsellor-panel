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
import Documents from "../../components/document";

import { backend_url } from "../../config";
import axios from "axios";

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
  const handleSave = async () => {
    try {
      const endpointUrl = `${backend_url}/${user._id}`; // Replace with your actual endpoint URL

      const response = await axios.put(endpointUrl, profile);
      setProfile(response.data);
      console.log(profile);
      setInitialUserProfileBackup(response.data);
      setEditProfileEnable(false);
    } catch (error) {
      // Handle errors if the request fails
      console.error("Error while saving:", error);
      // You might want to handle the error state here
    }
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
            {/* <BasicInfo
              profile={profile}
              editProfileEnable={editProfileEnable}
              setProfile={setProfile}
            /> */}
            <ContactInfo
              profile={profile}
              editProfileEnable={editProfileEnable}
              setProfile={setProfile}
            />
            {/* <OtherInfo
              profile={profile}
              editProfileEnable={editProfileEnable}
              setProfile={setProfile}
            />
            <EducationInfo
              profile={profile}
              setProfile={setProfile}
              editProfileEnable={editProfileEnable}
            /> */}
            <Documents
              profile={profile}
              setProfile={setProfile}
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
