import React, { useContext, useRef, useState } from 'react';
import axios from 'axios';
import { CiMenuKebab } from 'react-icons/ci';
import "./style.scss";
import { UserContext } from '../../context/UserContext';
import { backend_url } from '../../config';
import useClickOutside from '../../customHooks/useClickOutside';

const AddSession = ({ session, setSessions, setAddMode }) => {
  const Ref = useRef(null);
  const { user } = useContext(UserContext);
  const [sessionDetails, setSessionDetails] = useState({
    session_date: '',
    session_time: '',
    session_duration: '',
    session_type: '',
    session_fee: '',
    session_status: '',
    session_available_slots: '',
  });

  useClickOutside(Ref, () => setAddMode(false));

  const handleCreateSession = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backend_url}/sessions`, {
        ...sessionDetails,
        counsellor_id: user.id,
      }, {
        headers: {
          Authorization: user.token
        }
      });
      console.log('Session created successfully', response.data);
      setSessions(prev => [...prev, response.data.session]);
      setAddMode(false);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleCancel = () => {
    setSessionDetails({
      session_type: '',
      session_date: '',
      session_time: '',
      session_duration: '',
      session_type: '',
      session_fee: '',
      session_status: '',
      session_available_slots: '',
    });
    setAddMode(false);
  };

  return (
    <div ref={Ref} className="session-item">
      <form onSubmit={handleCreateSession} className='edit-mode-form'>
        <div className="edit-mode-fields">
          <div>
            <label>Type:</label>
            <input
              type="test"
              value={sessionDetails.session_type}
              onChange={(e) => setSessionDetails({ ...sessionDetails, session_type: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              value={sessionDetails.session_date}
              onChange={(e) => setSessionDetails({ ...sessionDetails, session_date: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Time:</label>
            <input
              type="time"
              value={sessionDetails.session_time}
              onChange={(e) => setSessionDetails({ ...sessionDetails, session_time: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Duration (in minutes):</label>
            <input
              type="number"
              value={sessionDetails.session_duration}
              onChange={(e) => setSessionDetails({ ...sessionDetails, session_duration: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Type:</label>
            <input
              type="text"
              value={sessionDetails.session_type}
              onChange={(e) => setSessionDetails({ ...sessionDetails, session_type: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Fee:</label>
            <input
              type="number"
              value={sessionDetails.session_fee}
              onChange={(e) => setSessionDetails({ ...sessionDetails, session_fee: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Status:</label>
            <input
              type="text"
              value={sessionDetails.session_status}
              onChange={(e) => setSessionDetails({ ...sessionDetails, session_status: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Available Slots:</label>
            <input
              type="number"
              value={sessionDetails.session_available_slots}
              onChange={(e) => setSessionDetails({ ...sessionDetails, session_available_slots: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="edit-mode-bottom">
          <button type="submit">Create Session</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddSession
