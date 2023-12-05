import { handleArrayInputChange } from "../../utilities";
import "./style.scss";

const EducationInfo = ({
  profile,
  setProfile,
  editProfileEnable,
}) => {
  return (
    <div className="BasicInfo-container">
      <div className="heading">
        <h2>My Educational Info</h2>
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
                  value={profile.qualifications.join(",")}
                  onChange={e => handleArrayInputChange('qualifications', e.target.value, setProfile)}
                />
              ) : (
                profile.qualifications?.map((qualification, i) => (
                  <p key={i}>{`${qualification}${i < profile.qualifications.length - 1 ? "," : ""
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
