import TagsInput from "react-tagsinput";
import { handleArrayInputChange, handleInput } from "../../utilities";
import "./style.scss";
import React, { useState } from "react";
import "react-tagsinput/react-tagsinput.css";

const EducationInfo = ({ profile, setProfile, editProfileEnable }) => {
  const [inputQualifications, setInputQualifications] = useState(
    profile.qualifications || [""]
  );

  const handleInputChange = (index, value) => {
    const newInput = [...inputQualifications];
    newInput[index] = value;
    setInputQualifications(newInput);
    setProfile((prevProfile) => ({
      ...prevProfile,
      qualifications: newInput,
    }));
  };
  const handleAddFields = () => {
    setInputQualifications([...inputQualifications, ""]);
  };
  const handleRmoveInputs = (index) => {
    const newInput = [...inputQualifications];
    newInput.splice(index, 1);
    setInputQualifications(newInput);
    setProfile((prevProfile) => ({
     ...prevProfile,
     qualifications: newInput,
   }));
  };
  return (
    <div className="BasicInfo-container">
      <div className="heading">
        <h2>My Educational Info</h2>
      </div>

      <div className="info">
        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Qualification</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <>
                  {inputQualifications.map((field, index) => (
                    <div className="inputFields" key = {index}>
                      <input
                        value={field}
                        validate
                        onChange={(e) =>
                          handleInputChange(index, e.target.value)
                        }
                      />
                      {index >= 0 && (
                        <button
                          className="remove-about-point"
                          onClick={() => handleRmoveInputs(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <div className="addButton">
                    <button onClick={handleAddFields}>Add</button>
                  </div>
                </>
              ) : (
               <>
               {profile.qualifications.map((qualification, i) => (
                <p>{qualification}</p>
               ))}
               {/* <p> {profile.qualifications}</p> */}
               </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationInfo;
