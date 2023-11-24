import "./style.scss";

const OtherInfo = ({ years, languages }) => {
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
              <p>{`${years}+ years`}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Languages</p>
            </div>
            <div className="info-value">
              {languages.map((language, i) => (
                <p key={i}>{`${language}${
                  i < languages.length - 1 ? "," : ""
                }`}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Nationality</p>
            </div>

            <div className="info-value">
              <p>Indian</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Apprach of counselling</p>
            </div>

            <div className="info-value">
              <p>fkasjfsafsdf sdfsdfsd fd sd fdf dfd fd dfd </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
