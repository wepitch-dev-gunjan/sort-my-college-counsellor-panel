import React, { useState } from "react";
import "./style.scss";
import { TextareaAutosize } from "@mui/material";

const HowMayIHelpYou = ({ profile, setProfile, editProfileEnable }) => {
  const [inputFields, setInputFields] = useState([{ value: "" }]);

  const handleAddField = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  const handleInputChange = (index, event) => {
    const newFields = [...inputFields];
    newFields[index].value = event.target.value;
    setInputFields(newFields);
  };
  console.log(inputFields);

  return (
    <div className="howmayihelpyou-container">
      <div className="heading">
        <h2 style={{ fontSize: "1.6rem" }}>How May I Help You</h2>
      </div>

      <div className="info">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Heading</p>
          <p>Description</p>
        </div>
        <div>
          {!editProfileEnable ? (
            <h6 className="askHeading">"Ask your Question here "</h6>
          ) : (
            <div>
              {inputFields.map((field, index) => (
                <div className="row" key={index}>
                  <div className="col">
                    <div className="info-fields">
                      <h6 onChange={(e) => handleInputChange(index, e)}>
                        {index + 1}
                      </h6>

                      <TextareaAutosize
                        minRows="2"
                        style={{ overflowY: "scroll", resize: "vertical" }}
                        value={field.value}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="helpButton">
                <button className="helpButton" onClick={handleAddField}>
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowMayIHelpYou;
