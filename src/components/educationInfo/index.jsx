import "./style.scss";
import React, { useState } from "react";

const EducationInfo = ({
  qualifications: initialQualifications,
  editProfileEnable,
}) => {
  const [qualifications, setQualifications] = useState(initialQualifications);

  const handleQualificationsChange = (e) => {
    const updatedQualifications = e.target.value.split(",");
    setQualifications(updatedQualifications);
  };

  return (
    <div className="BasicInfo-container">
      <div className="heading">
        <h2>Education info</h2>
      </div>

      <div className="info">
        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Qualification</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <input
                  type="text"
                  value={qualifications.join(",")}
                  onChange={handleQualificationsChange}
                />
              ) : (
                qualifications.map((qualification, i) => (
                  <p key={i}>{`${qualification}${
                    i < qualifications.length - 1 ? "," : ""
                  }`}</p>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationInfo;
