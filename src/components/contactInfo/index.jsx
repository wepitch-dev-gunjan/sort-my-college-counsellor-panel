import React from 'react';
import './style.scss';
import { handleInput, handleInputInsideInputChange } from '../../utilities';

const ContactInfo = ({ profile, editProfileEnable, setProfile }) => {
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
                <input type="text" value={profile.phone_no} onChange={e => handleInput("phone_no", e.target.value, setProfile)} />
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
                  {<input type="text" placeholder='Country' value={profile.location.country} onChange={(e) => handleInputInsideInputChange(e.target.value, 'location', 'country', setProfile)} />}
                  {<input type="text" placeholder='State' value={profile.location.state} onChange={(e) => handleInputInsideInputChange(e.target.value, 'location', 'state', setProfile)} />}
                  {<input type="text" placeholder='City' value={profile.location.city} onChange={(e) => handleInputInsideInputChange(e.target.value, 'location', 'city', setProfile)} />}
                  {<input type="text" placeholder='Pin-code' value={profile.location.pin_code} onChange={(e) => handleInputInsideInputChange(e.target.value, 'location', 'pin_code', setProfile)} />}
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
