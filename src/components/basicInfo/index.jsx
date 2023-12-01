import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";

const BasicInfo = ({ email, age, gender, editProfileEnable }) => {
  const [editedValues, setEditedValues] = useState({
    email,
    age,
    gender,
    dob: null,
  });

  const handleInput = (fieldName, value) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleDateChange = (date) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      dob: date,
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
                  value={editedValues.email}
                  onChange={(e) => handleInput("email", e.target.value)}
                />
              ) : (
                <p>{editedValues.email}</p>
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
                  value={editedValues.gender}
                  onChange={(e) => handleInput("gender", e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              ) : (
                <p>{editedValues.gender}</p>
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
                  selected={editedValues.dob}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                />
              ) : (
                <p>{editedValues.age}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
