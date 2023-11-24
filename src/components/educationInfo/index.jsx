import "./style.scss";

const EducationInfo = ({ qualifications }) => {
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
              {qualifications.map((qualification, i) => (
                <p key={i}>{`${qualification}${
                  i < qualifications.length - 1 ? "," : ""
                }`}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationInfo;
