import { Tooltip, Typography } from "@mui/material";
import "./style.scss";
import { UserContext } from "../../context/UserContext";
import React, { useContext, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { ProfileContext } from "../../context/ProfileContext";

const CoverImage = ({ src }) => {
  const { user, setUser } = useContext(UserContext);
  const { coverImageEditMode, setCoverImageEditMode } =
    useContext(ProfileContext);

  const openUploader = () => {
    // inputRef.current.click();
    setCoverImageEditMode((prev) => !prev);
  };

  
  return (
    <>
      
      <div className="CoverImage-container">
        <img src={src} alt="Cover Image" />
        <Tooltip
          title={
            <Typography style={{ fontSize: "16px" }}>
              Change cover picture
            </Typography>
          }
          placement="bottom"
          arrow
          PopperProps={{
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, 10],
                },
              },
            ],
          }}
        >
          <div className="pic-upload-container">
            <FaCamera
              size="25"
              className="camera-icon"
              onClick={openUploader}
            />
          </div>
        </Tooltip>
      </div>
    </>
  );
};

export default CoverImage;
