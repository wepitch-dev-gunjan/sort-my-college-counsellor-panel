import React, { useContext, useRef, useState } from 'react';
import './style.scss';
import { UserContext } from '../../context/UserContext';
import { FaCamera } from 'react-icons/fa';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';
import AddProfilePic from './addProfilePic';
import { ProfileContext } from '../../context/ProfileContext';

const ProfilePic = () => {
  const { user, setUser } = useContext(UserContext);
  const { profilePicEditMode, setProfilePicEditMode } = useContext(ProfileContext)

  const openUploader = () => {
    // inputRef.current.click();
    setProfilePicEditMode(prev => !prev);
  };

  return (
    <>
      <div className="add-profile-pic-panel">
        {profilePicEditMode && <AddProfilePic />}
      </div>
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
                  offset: [0, 10],
                },
              },
            ],
          }}
        >
          <div className="pic-upload-container">
            <FaCamera size="25" className="camera-icon" onClick={openUploader} />
          </div>
        </Tooltip>
      </div>
    </>
  );
};

export default ProfilePic;
