import { Tooltip, Typography } from "@mui/material";
import "./style.scss";
import { UserContext } from "../../context/UserContext";
import React, { useContext, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import AddCoverImage from "./addCoverImage";
import { ProfileContext } from "../../context/ProfileContext";
import useClickOutside from "../../customHooks/useClickOutside";

const CoverImage = ({ src }) => {
  const addCoverImageRef = useRef(null);
  const { user, setUser } = useContext(UserContext);
  const { coverImageEditMode, setCoverImageEditMode } =
    useContext(ProfileContext);

  const openUploader = () => {
    // inputRef.current.click();
    setCoverImageEditMode((prev) => !prev);
  };

  useClickOutside(addCoverImageRef, () => {
    setCoverImageEditMode((prev) => !prev);
  });

  return (
    <>
      {coverImageEditMode && (
        <div className="add-cover-image-panel">
          <AddCoverImage ref={addCoverImageRef} />
        </div>
      )}
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
