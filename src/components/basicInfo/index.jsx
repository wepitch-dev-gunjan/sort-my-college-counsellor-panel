import './style.scss'

const BasicInfo = ({ email, age, gender }) => {
  return (
    <div className='BasicInfo-container'>
      <div className="heading">
        <h2>Basic info</h2>
      </div>

      <div className="info">
        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Email</p>
            </div>
            <div className="info-value">
              <p>{email}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Gender</p>
            </div>
            <div className="info-value">
              <p>{gender}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Age</p>
            </div>
            <div className="info-value">
              <p>{age}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;