import React, { useState } from 'react';
import './style.scss';

const ContactInfo = ({ phone: initialPhone, location: initialLocation, editProfileEnable }) => {
  const [phone, setPhone] = useState(initialPhone);
  const [location, setLocation] = useState(initialLocation);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleLocationChange = (e, field) => {
    setLocation((prevLocation) => ({
      ...prevLocation,
      [field]: e.target.value,
    }));
  };

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
              {editProfileEnable ? (
                <input type="text" value={phone} onChange={handlePhoneChange} />
              ) : (
                <p>{phone}</p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Location</p>
            </div>
            <div className="info-value">
              {editProfileEnable ? (
                <>
                  <input type="text" value={location.country} onChange={(e) => handleLocationChange(e, 'country')} />
                  <input type="text" value={location.state} onChange={(e) => handleLocationChange(e, 'state')} />
                  <input type="text" value={location.city} onChange={(e) => handleLocationChange(e, 'city')} />
                  <input type="text" value={location.pin_code} onChange={(e) => handleLocationChange(e, 'pin_code')} />
                </>
              ) : (
                <>
                  <p>{`${location.country},`}</p>
                  <p>{`${location.state},`}</p>
                  <p>{`${location.city},`}</p>
                  <p>{location.pin_code}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
