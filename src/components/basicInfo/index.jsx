import React, { useState } from "react";
import "./style.scss";

const BasicInfo = ({ email, age, gender, editProfileEnable }) => {
  const [editedValues, setEditedValues] = useState({ email, age, gender });

  const handleInput = (fieldName, value) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
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
              <p>Age</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <input
                  type="text"
                  value={editedValues.age}
                  onChange={(e) => handleInput("age", e.target.value)}
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
