import React, { useState, useRef, useContext } from 'react';
import AvatarEditor from 'react-avatar-editor';
import './style.scss';
import { ProfileContext } from '../../../context/ProfileContext';

const AddProfilePic = () => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const editorRef = useRef(null);
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
      console.log(imageData); // You can send this data to server or use as needed
    }
  };

  const handleCancel = () => {
    setProfilePicEditMode(false)
  }

  return (
    <div className='AddProfilePic-container'>
      <input type="file" onChange={handleImageChange} accept="image/*" />
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
};

export default AddProfilePic;
