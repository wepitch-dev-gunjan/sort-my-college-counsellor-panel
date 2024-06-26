import React, { useState } from "react";
import "./style.scss";
import { TextareaAutosize } from "@mui/material";
import { handleInput } from "../../utilities";
import { Textarea } from "@mui/joy";
import { GoDotFill } from "react-icons/go";


const HowMayIHelpYou = ({ profile, setProfile, editProfileEnable }) => {
  const [inputFields, setInputFields] = useState(profile.how_will_i_help || [""]);

  const handleAddField = () => {
    setInputFields([...inputFields, ""]);
  };

  const handleInputChange = (index, value) => {
    const newFields = [...inputFields];
    newFields[index] = value;
    setInputFields(newFields);
    setProfile((prevProfile) => ({
      ...prevProfile,
      how_will_i_help: newFields, 
    }));
  };
  const handleRmoveInputs = (index) => {
   const newFields = [...inputFields];
   newFields.splice(index, 1);
   setInputFields(newFields);
   setProfile((prevProfile) => ({
    ...prevProfile,
    how_will_i_help: newFields, 
  }));
 };
  return (
    <div className="howmayihelpyou-container">
      <div className="heading">
        <h2 style={{ fontSize: "1.6rem" }}>How will I Help</h2>
      </div>
      <div className=" hwih-sub-headings">
        <div>
          {editProfileEnable ? (
            <>
              {inputFields.map((field, index) => (
                <div className="row" key={index}>
                  <div className="col">
                    <div className="info-fields hwihu-edit">
                      <p>{index + 1}</p>
                      <Textarea
                        minRows="2"
                        style={{ overflowY: "scroll", resize: "vertical" }}
                        value={field}
                        onChange={(e) => handleInputChange(index, e.target.value)}
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
                  </div>
                </div>
              ))}
              <div className="helpButton">
                <button className="helpButton" onClick={handleAddField}>
                  Add
                </button>
              </div>
            </>
          ) : (
            <>
              {inputFields.map((field, index) => (
                <div className="row" key={index}>
                  <div className="col">
                    <div className="info-fields">
                      {/* <p>{index + 1}</p> */}
                      <p>{field}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowMayIHelpYou;
