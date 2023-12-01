import React, { useState } from "react";
import "./style.scss";
import { FaIndianRupeeSign } from "react-icons/fa6";

const OtherInfo = ({
  profile,
  setProfile,
  editProfileEnable,

}) => {
  const handleInput = (field, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleYearsChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      handleInput('years_of_experience', value);
    }
  };

  const handleLanguagesChange = (e) => {
    const updatedLanguages = e.target.value.split(",");
    handleInput('languages', updatedLanguages);
  };
  return (
    <div className="OtherInfo-container">
      <div className="heading">
        <h2>Other info</h2>
      </div>

      <div className="info">
        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Experience</p>
            </div>

            <div className="info-value">
              {editProfileEnable ? (
                <>
                  <input
                    type="text"
                    value={profile.experience_in_years}
                    onChange={handleYearsChange}
                  />
                  <button onClick={e => handleYearsChange(e.target.value)}>+</button>
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
              <p>Languages</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <input
                  type="text"
                  value={profile.languages_spoken.join(",")}
                  onChange={handleLanguagesChange}
                />
              ) : (
                profile.languages_spoken.map((language, i) => (
                  <p key={i}>{`${language}${i < profile.languages_spoken.length - 1 ? "," : ""
                    }`}</p>
                ))
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
                <select
                  value={profile.nationality}
                  onChange={(e) => handleInput('nationality', e.target.value)}
                >
                  <option value="Indian">Indian</option>
                  <option value="Foreign">Foreign</option>
                </select>
              ) : (
                <p>{profile.nationality}</p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Approach of counselling</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <input
                  type="text"
                  value={profile.approach_of_counselling}
                  onChange={(e) => handleInput("approach_of_counselling", e.target.value)}
                />
              ) : (
                <p>{profile.approach_of_counselling}</p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Group session price</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <input
                  type="text"
                  value={profile.group_session_price}
                  onChange={e => handleInput("group_session_price", e.target.value)}
                />
              ) : (
                <p>
                  <FaIndianRupeeSign /> {profile.group_session_price}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Personal session price</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <input
                  type="text"
                  value={profile.personal_session_price}
                  onChange={e => handleInput("group_session_price", e.target.value)}
                />
              ) : (
                <p>
                  <FaIndianRupeeSign /> {profile.personal_session_price}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
