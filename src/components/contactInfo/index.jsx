import React from 'react';
import './style.scss';

const ContactInfo = ({ profile, editProfileEnable, setProfile }) => {
  const handleInput = (fieldName, value) => {
    setProfile(prev => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleLocationChange = (e, field) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      location: {
        ...prevProfile.location,
        [field]: e.target.value,
      },
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
                <input type="text" value={profile.phone_no} onChange={e => handleInput("phone_no", e.target.value)} />
              ) : (
                <p>{profile.phone_no}</p>
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
                  {profile.location?.country && <input type="text" placeholder='Country' value={profile.location.country} onChange={(e) => handleLocationChange(e, 'country')} />}
                  {profile.location?.state && <input type="text" placeholder='State' value={profile.location.state} onChange={(e) => handleLocationChange(e, 'state')} />}
                  {profile.location?.city && <input type="text" placeholder='City' value={profile.location.city} onChange={(e) => handleLocationChange(e, 'city')} />}
                  {profile.location.pin_code && <input type="text" placeholder='Pin-code' value={profile.location.pin_code} onChange={(e) => handleLocationChange(e, 'pin_code')} />}
                </>
              ) : (
                <>
                  <p>{`${profile.location?.country},`}</p>
                  <p>{`${profile.location?.state},`}</p>
                  <p>{`${profile.location?.city},`}</p>
                  <p>{profile.location?.pin_code}</p>
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
