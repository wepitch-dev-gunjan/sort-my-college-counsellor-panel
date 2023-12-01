import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";

const BasicInfo = ({ profile, editProfileEnable, setProfile }) => {
  const handleInput = (fieldName, value) => {
    setProfile(prev => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleDateChange = (date) => {
    setProfile((prevValues) => ({
      ...prevValues,
      date_of_birth: date,
    }));
  };

  return (
    <div className="BasicInfo-container">
      <div className="heading">
        <h2>Basic info</h2>
      </div>

      <div className="info">
        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Email</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <input
                  type="text"
                  value={profile.email}
                  onChange={(e) => handleInput("email", e.target.value)}
                />
              ) : (
                <p>{profile.email}</p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Gender</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <select
                  value={profile.gender}
                  onChange={(e) => handleInput("gender", e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              ) : (
                <p>{profile.gender}</p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Date of birth</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <DatePicker
                  selected={profile.date_of_birth}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                />
              ) : (
                <p>{profile.date_of_birth}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
