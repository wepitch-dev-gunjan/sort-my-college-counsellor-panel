import "./style.scss";

import { FaIndianRupeeSign } from "react-icons/fa6";
import { handleInput } from "../../utilities";
import TagsInput from "react-tagsinput";
import React, { useState } from "react";
import "react-tagsinput/react-tagsinput.css";

const OtherInfo = ({ profile, setProfile, editProfileEnable }) => {
  // const handleYearsChange = (e) => {
  //   const value = parseInt(e.target.value);
  //   if (!isNaN(value)) {
  //     handleInput('years_of_experience', value);
  //   }
  // };
  const [inputFields, setInputFields] = useState(
    profile.languages_spoken || [""]
  );
  const [inputCourses, setInputCourses] = useState(
    profile.courses_focused || [""]
  );

  const handleAddField = (type) => {
    if (type === "languages") {
      setInputFields([...inputFields, ""]);
    } else if (type === "courses") {
      setInputCourses([...inputCourses, ""]);
    }
  };

  const handleInputChange = (index, value, type) => {
    if (type === "languages") {
      const newInputFields = [...inputFields];
      newInputFields[index] = value;
      setInputFields(newInputFields);
      setProfile((prevProfile) => ({
        ...prevProfile,
        languages_spoken: newInputFields,
      }));
    } else if (type === "courses") {
      const newInputCourses = [...inputCourses];
      newInputCourses[index] = value;
      setInputCourses(newInputCourses);
      setProfile((prevProfile) => ({
        ...prevProfile,
        courses_focused: newInputCourses,
      }));
    }
  };

  const handleRemoveInput = (index, type) => {
    if (type === "languages") {
      const newFields = [...inputFields];
      newFields.splice(index, 1);
      setInputFields(newFields);
      setProfile((prevProfile) => ({
        ...prevProfile,
        languages_spoken: newFields,
      }));
    } else if (type === "courses") {
      const newCourses = [...inputCourses];
      newCourses.splice(index, 1);
      setInputCourses(newCourses);
      setProfile((prevProfile) => ({
        ...prevProfile,
        courses_focused: newCourses,
      }));
    }
  };

  const handleRadioChange = (e) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      nationality: e.target.value,
    }));
  };

  const handleLocationCheckboxChange = (fieldName, value) => {
    const updatedLocations = profile.locations_focused.includes(value)
      ? profile.locations_focused.filter((location) => location !== value)
      : [...profile.locations_focused, value];
    handleInput(fieldName, updatedLocations, setProfile);
  };

  const handleCheckboxChange = (fieldName, value) => {
    const updatedDegrees = profile.degree_focused.includes(value)
      ? profile.degree_focused.filter((degree) => degree !== value)
      : [...profile.degree_focused, value];
    handleInput(fieldName, updatedDegrees, setProfile);
  };
  //testing

  return (
    <div className="OtherInfo-container">
      <div className="heading">
        <h2>Other info</h2>
      </div>

      <div className="info">
        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Industrial Experience</p>
            </div>

            <div className="info-value">
              {editProfileEnable ? (
                <>
                  <input
                    type="text"
                    value={profile.experience_in_years}
                    onChange={(e) =>
                      handleInput(
                        "experience_in_years",
                        e.target.value,
                        setProfile
                      )
                    }
                  />
                </>
              ) : (
                <p>{`${profile.experience_in_years}+ years`}</p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Designation</p>
            </div>

            <div className="info-value">
              {editProfileEnable ? (
                <>
                  <input
                    type="text"
                    value={profile.designation}
                    onChange={(e) =>
                      handleInput("designation", e.target.value, setProfile)
                    }
                  />
                </>
              ) : (
                <p>{`${profile.designation}`}</p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Languages I know</p>
            </div>
            {/* Languages Spoken */}
            <div className="info-value">
              {editProfileEnable ? (
                <>
                  {inputFields.map((field, index) => (
                    <>
                      <input
                        value={field}
                        onChange={(e) =>
                          handleInputChange(index, e.target.value, "languages")
                        }
                      />
                      {index >= 0 && (
                        <button
                          className="remove_btn"
                          onClick={() => handleRemoveInput(index, "languages")}
                        >
                          Remove
                        </button>
                      )}
                    </>
                  ))}
                  <div className="addButton">
                    <button onClick={() => handleAddField("languages")}>
                      ADD
                    </button>
                  </div>
                </>
              ) : (
                <>
                <ul>
                  {profile.languages_spoken.map((language, index) => (
                   
                    <p>{language}</p>
                  ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Nationality</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <>
                  <div className="ug">
                    <label className="ug-text">
                      <input
                        type="radio"
                        value="Indian"
                        checked={profile.nationality === "Indian"}
                        onChange={handleRadioChange}
                      />
                      Indian
                    </label>
                    <label className="ug-text">
                      <input
                        type="radio"
                        value="Foreign"
                        checked={profile.nationality === "Foreign"}
                        onChange={handleRadioChange}
                      />
                      Foreign
                    </label>
                  </div>
                </>
              ) : (
                <p>{profile.nationality}</p>
              )}
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Approach of counselling</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <input
                  type="text"
                  value={profile.approach_of_counselling}
                  onChange={(e) => handleInput("approach_of_counselling", e.target.value, setProfile)}
                />
              ) : (
                <p>{profile.approach_of_counselling}</p>
              )}
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Degree focused</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <>
                  <div className="ug">
                    <label className="ug-text">
                      <input
                        type="checkbox"
                        value="UG"
                        checked={profile.degree_focused.includes("UG")}
                        onChange={(e) =>
                          handleCheckboxChange("degree_focused", e.target.value)
                        }
                      />
                      UG
                    </label>
                    <label className="ug-text">
                      <input
                        type="checkbox"
                        value="PG"
                        checked={profile.degree_focused.includes("PG")}
                        onChange={(e) =>
                          handleCheckboxChange("degree_focused", e.target.value)
                        }
                      />
                      PG
                    </label>
                  </div>
                </>
              ) : (
                <p>
                  {Array.isArray(profile.degree_focused)
                    ? profile.degree_focused.join(", ")
                    : ""}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Locations focused</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <div className="ug">
                  <label className="ug-text">
                    <input
                      type="checkbox"
                      value="India"
                      checked={profile.locations_focused.includes("India")}
                      onChange={(e) =>
                        handleLocationCheckboxChange(
                          "locations_focused",
                          e.target.value
                        )
                      }
                    />
                    India
                  </label>
                  <label className="ug-text">
                    <input
                      type="checkbox"
                      value="Abroad"
                      checked={profile.locations_focused.includes("Abroad")}
                      onChange={(e) =>
                        handleLocationCheckboxChange(
                          "locations_focused",
                          e.target.value
                        )
                      }
                    />
                    Abroad
                  </label>
                </div>
              ) : (
                profile.locations_focused?.map((location, i) => (
                  <p key={i}>{`${location}${
                    i < profile.locations_focused.length - 1 ? "," : ""
                  }`}</p>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Courses focused</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <>
                  {inputCourses.map((field, index) => (
                    <>
                      <input
                        value={field}
                        onChange={(e) =>
                          handleInputChange(index, e.target.value, "courses")
                        }
                      />
                      {index >= 0 && (
                        <button
                          className="remove_btn"
                          onClick={() => handleRemoveInput(index, "courses")}
                        >
                          Remove
                        </button>
                      )}
                    </>
                  ))}
                  <div className="addButton">
                    <button onClick={() => handleAddField("courses")}>
                      ADD
                    </button>
                  </div>
                </>
              ) : (
                <>
                <ul>
                  {profile.courses_focused.map((course, index) => (
                    <p>{course}</p>
                  ))}
                </ul>
                </>
              )
              }
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Group session price</p>
            </div>
            <div className="info-value">
              <p>
                <FaIndianRupeeSign /> {profile.group_session_price}
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Personal session price</p>
            </div>
            <div className="info-value">
              <p>
                <FaIndianRupeeSign /> {profile.personal_session_price}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OtherInfo;
