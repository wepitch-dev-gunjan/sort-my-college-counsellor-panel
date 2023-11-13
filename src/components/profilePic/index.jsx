import React, { useContext, useRef, useState } from 'react';
import './style.scss';
import { UserContext } from '../../context/UserContext';
import { FaCamera } from 'react-icons/fa';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';
import AddProfilePic from './addProfilePic';

const ProfilePic = () => {
  const { user, setUser } = useContext(UserContext);
  const [uploadingPanel, setUploadingPanel] = useState(false);
  const inputRef = useRef(null);

  // const handleProfilePicChange = (event) => {
  //   const file = event.target.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(file);
  //   fileReader.onloadend = () => {
  //     setUser((prev) => ({ ...prev, profile_pic: fileReader.result }));
  //   };
  // };

  const openUploader = () => {
    // inputRef.current.click();
    setUploadingPanel(prev => !prev);
  };

  return (
    <div className="ProfilePic-container">
      <img src={user.profile_pic} alt="Profile" className="profile-pic" />
      <Tooltip
        title={<Typography style={{ fontSize: '16px' }}>Change profile picture</Typography>}
        placement='right'
        arrow
        PopperProps={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 10], // Adjust the second value to increase or decrease the gap
              },
            },
          ],
        }}
      >
        <div className="pic-upload-container">
          <FaCamera size="25" className="camera-icon" onClick={openUploader} />
        </div>
      </Tooltip>
      {uploadingPanel && <AddProfilePic />}
      {/* <input
        ref={inputRef}
        type="file"
        onChange={handleProfilePicChange}
        className="profile-pic-input"
        accept="image/*"
        style={{ display: 'none' }} // Hide the file input
      /> */}
    </div>
  );
};

export default ProfilePic;
