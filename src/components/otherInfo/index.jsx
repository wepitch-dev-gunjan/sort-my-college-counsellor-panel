import React, { useState } from "react";
import "./style.scss";
import { FaIndianRupeeSign } from "react-icons/fa6";

const OtherInfo = ({
  years: initialYears,
  languages: initialLanguages,
  group_session_price: initialGroupSessionPrice,
  personal_session_price: initialPersonalSessionPrice,
  editProfileEnable,
  nationality: initialNationality,
  counsellingApproach: initialCounsellingApproach,
}) => {
  const [years, setYears] = useState(initialYears);
  const [languages, setLanguages] = useState(initialLanguages);
  const [groupSessionPrice, setGroupSessionPrice] = useState(
    initialGroupSessionPrice
  );
  const [personalSessionPrice, setPersonalSessionPrice] = useState(
    initialPersonalSessionPrice
  );
  const [nationality, setNationality] = useState(initialNationality);
  const [counsellingApproach, setCounsellingApproach] = useState(
    initialCounsellingApproach
  );

  const handleYearsChange = (e) => {
    setYears(e.target.value);
  };

  const handleLanguagesChange = (e) => {
    const updatedLanguages = e.target.value.split(",");
    setLanguages(updatedLanguages);
  };

  const handleGroupSessionPriceChange = (e) => {
    setGroupSessionPrice(e.target.value);
  };

  const handlePersonalSessionPriceChange = (e) => {
    setPersonalSessionPrice(e.target.value);
  };
  //increment years
  const handleIncrementYears = () => {
    setYears((prevYears) => prevYears + 1);
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
                    value={years}
                    onChange={handleYearsChange}
                  />
                  <button onClick={handleIncrementYears}>+</button>
                </>
              ) : (
                <p>{`${years}+ years`}</p>
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
                  value={languages.join(",")}
                  onChange={handleLanguagesChange}
                />
              ) : (
                languages.map((language, i) => (
                  <p key={i}>{`${language}${
                    i < languages.length - 1 ? "," : ""
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
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                >
                  <option value="Indian">Indian</option>
                  <option value="Foreign">Foreign</option>
                </select>
              ) : (
                <p>{nationality}</p>
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
                  value={counsellingApproach}
                  onChange={(e) => setCounsellingApproach(e.target.value)}
                />
              ) : (
                <p>{counsellingApproach}</p>
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
                  value={groupSessionPrice}
                  onChange={handleGroupSessionPriceChange}
                />
              ) : (
                <p>
                  <FaIndianRupeeSign /> {groupSessionPrice}
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
                  value={personalSessionPrice}
                  onChange={handlePersonalSessionPriceChange}
                />
              ) : (
                <p>
                  <FaIndianRupeeSign /> {personalSessionPrice}
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
