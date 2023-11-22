import "./style.css";

const ContactInfo = ({ phone, location }) => {
  return (
    <div className="ContactInfo-container">
      <div className="heading">
        <h2>Contact info</h2>
      </div>

      <div className="info">
        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Phone</p>
            </div>
            <div className="info-value">
              <p>{phone}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Location</p>
            </div>
            <div className="info-value">
              <p>{`${location.country},`}</p>
              <p>{`${location.state},`}</p>
              <p>{`${location.city},`}</p>
              <p>{location.pin_code}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
