import React, { useState, useRef, useContext, forwardRef, useImperativeHandle } from 'react';
import AvatarEditor from 'react-avatar-editor';
import './style.scss';
import { ProfileContext } from '../../../context/ProfileContext';
import { IoCloudUploadOutline } from "react-icons/io5";

const AddProfilePic = forwardRef((props, ref) => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const editorRef = useRef(null);
  const fileRef = useRef(null);
  const { profilePicEditMode, setProfilePicEditMode } = useContext(ProfileContext)

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = (event) => setImage(event.target.result);
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleScaleChange = (event) => {
    setScale(parseFloat(event.target.value));
  };

  const onSave = () => {
    if (editorRef.current) {
      const canvasScaled = editorRef.current.getImageScaledToCanvas();
      const imageData = canvasScaled.toDataURL();
      console.log(imageData); // You can send this data to the server or use as needed
    }
  };

  const handleCancel = () => {
    setProfilePicEditMode(false)
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      const fileReader = new FileReader();
      fileReader.onload = (event) => setImage(event.target.result);
      fileReader.readAsDataURL(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className='AddProfilePic-container'>
      {!image &&
        <div className="drop-area-container">
          <div
            ref={ref}
            className="drop-area"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileRef.current.click()}
          >
            <IoCloudUploadOutline size='100' />
            Drag & Drop here
            <p>or</p>
            <div className="browse-button">
              Browse File
            </div>
          </div>
        </div>
      }
      <input ref={fileRef} type="file" onChange={handleImageChange} accept="image/*" style={{ display: 'none' }} />
      {image && (
        <>
          <div className="middle">
            <div className="avatar-editor-container">
              <AvatarEditor
                ref={editorRef}
                image={image}
                width={500}
                height={500}
                border={50}
                borderRadius={250} // Half of width and height to create a circle
                color={[255, 255, 255, 0.6]} // RGBA
                scale={scale}
                rotate={0}
              />
              <div className="bottom">
                <button onClick={onSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            </div>
            <input
              type="range"
              onChange={handleScaleChange}
              min="1"
              max="2"
              step="0.01"
              defaultValue="1"
            />
          </div>
        </>
      )}
    </div>
  );
});

export default AddProfilePic;
