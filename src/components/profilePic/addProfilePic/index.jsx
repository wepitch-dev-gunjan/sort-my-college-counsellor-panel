import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import './style.scss';

const AddProfilePic = () => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const editorRef = useRef(null);

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

  return (
    <div className='AddProfilePic-container'>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {image && (
        <>
          <AvatarEditor
            ref={editorRef}
            image={image}
            width={250}
            height={250}
            border={50}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={scale}
            rotate={0}
          />
          <br />
          <input
            type="range"
            onChange={handleScaleChange}
            min="1"
            max="2"
            step="0.01"
            defaultValue="1"
          />
          <button onClick={onSave}>Save</button>
        </>
      )}
    </div>
  );
};

export default AddProfilePic;
