import "./style.scss";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { handleArrayInputChange, handleInput } from "../../utilities";

const OtherInfo = ({
  profile,
  setProfile,
  editProfileEnable,

}) => {
  const handleYearsChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      handleInput('years_of_experience', value);
    }
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
              <p>Industrial Experience</p>
            </div>

            <div className="info-value">
              {editProfileEnable ? (
                <>
                  <input
                    type="text"
                    value={profile.experience_in_years}
                    onChange={e => handleInput('experience_in_years', e.target.value, setProfile)}
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
              <p>Languages I know</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <input
                  type="text"
                  value={profile.languages_spoken.join(",")}
                  onChange={e => handleArrayInputChange('languages_spoken', e.target.value, setProfile)}
                />
              ) : (
                profile.languages_spoken?.map((language, i) => (
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
                  onChange={(e) => handleInput('nationality', e.target.value, setProfile)}
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
                  onChange={(e) => handleInput("approach_of_counselling", e.target.value, setProfile)}
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
              <p>Degree focused</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <select
                  value={profile.degree_focused}
                  onChange={(e) => handleInput("degree_focused", e.target.value, setProfile)}
                >
                  <option value="UG">UG</option>
                  <option value="PG">PG</option>
                </select>
              ) : (
                <p>{profile.degree_focused}</p>
              )}
            </div>
          </div>
        </div>


        <div className="info">
          <div className="row">
            <div className="col">
              <div className="info-field">
                <p>Locations focused</p>
              </div>
              <div className="info-value">
                {editProfileEnable ? (
                  <input
                    type="text"
                    value={profile.locations_focused.join(",")}
                    onChange={e => handleArrayInputChange('locations_focused', e.target.value, setProfile)}
                  />
                ) : (
                  profile.locations_focused?.map((locations_focused, i) => (
                    <p key={i}>{`${locations_focused}${i < profile.locations_focused.length - 1 ? "," : ""
                      }`}</p>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="row">
            <div className="col">
              <div className="info-field">
                <p>Courses focused</p>
              </div>
              <div className="info-value">
                {editProfileEnable ? (
                  <input
                    type="text"
                    value={profile.courses_focused.join(",")}
                    onChange={e => handleArrayInputChange('courses_focused', e.target.value, setProfile)}
                  />
                ) : (
                  profile.courses_focused?.map((courses_focused, i) => (
                    <p key={i}>{`${courses_focused}${i < profile.courses_focused.length - 1 ? "," : ""
                      }`}</p>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>



        <div className="row">
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
        </div>

        <div className="row">
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
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
