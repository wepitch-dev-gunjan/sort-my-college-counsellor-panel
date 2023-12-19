import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { CiMenuKebab } from 'react-icons/ci';
import "./style.scss";
import { UserContext } from '../../context/UserContext';
import { backend_url } from '../../config';
import useClickOutside from '../../customHooks/useClickOutside';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionContext } from '../../context/SessionContext';
import { ImSpinner8 } from "react-icons/im";


const AddSession = ({ session, setSessions, setAddMode }) => {
  const Ref = useRef(null);
  const { user } = useContext(UserContext);
  const { sessionLoading, setSessionLoading } = useContext(SessionContext)

  const formatDate = (date) => {
    return dayjs(date).format('YYYY-MM-DD');
  };

  function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Get tomorrow's date
    return tomorrow;
  }

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = Math.round(now.getMinutes() / 30) * 30; // Round to nearest 30 minutes
    return `${hours}:${minutes.toString().padStart(2, '0')}`;
  }

  const [sessionDetails, setSessionDetails] = useState({
    session_date: formatDate(getTomorrowDate()),
    session_time: getCurrentTime(),
    session_duration: '60',
    session_type: 'Personal',
    session_fee: '0',
    session_status: 'Available',
    session_available_slots: '5',
  });

  useEffect(() => {
    // Update session_fee based on session_type
    const updatedSessionDetails = {
      ...sessionDetails,
      session_fee: sessionDetails.session_type === 'Personal' ? '500' : '1000',
    };
    setSessionDetails(updatedSessionDetails);
  }, [sessionDetails.session_type]);

  useClickOutside(Ref, () => setAddMode(false));

  const handleCreateSession = async (event) => {
    event.preventDefault();
    try {
      setSessionLoading(true);
      console.log("session")
      const response = await axios.post(`${backend_url}/counsellor/sessions`, {
        ...sessionDetails,
        counsellor_id: user.id,
      }, {
        headers: {
          Authorization: user.token
        }
      });
      console.log('Session created successfully', response.data);
      setSessions(prev => [...prev, response.data.session]);
      setSessionLoading(false);
      setAddMode(false)
      toast('Session created successfully')
    } catch (error) {
      setSessionLoading(false);
      setAddMode(false)
      toast(error.response.data.error)
      console.error('An error occurred:', error.response.data);
      // console.error('An error occurred:', error);
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
      {
        sessionLoading &&
        <div className='spinner-container'>
          <div className='spinner'>
            <ImSpinner8 size='40' />
          </div>
          <span>Adding Session..</span>
        </div>
      }
      {
        !sessionLoading &&
        <form onSubmit={handleCreateSession} className='edit-mode-form'>
          <div className="edit-mode-fields">
            <div>
            </div>
            <div>
              <label>Date:</label>
              <input
                type="date"
                value={sessionDetails.session_date}
                onChange={(e) => setSessionDetails({ ...sessionDetails, session_date: formatDate(e.target.value) })}
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
                step="15"
                min="45"
                max="90"
                value={sessionDetails.session_duration}
                onChange={(e) => setSessionDetails({ ...sessionDetails, session_duration: e.target.value })}
                required
              />
            </div>
            <div>
              <div>
                <label>Type:</label>
                <select
                  value={sessionDetails.session_type}
                  onChange={(e) => setSessionDetails({ ...sessionDetails, session_type: e.target.value })}
                  required
                >
                  <option value="Personal">Personal</option>
                  <option value="Group">Group</option>
                </select>
              </div>
            </div>
            <div>
              <label>Fee:</label>
              <input
                type="number"
                step="100"
                min={sessionDetails.session_type === 'Personal' ? "500" : "1000"}
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

              {
                sessionDetails.session_type === 'Group' &&
                <>
                  <label>Available Slots:</label>
                  <input
                    type="number"
                    value={sessionDetails.session_available_slots}
                    onChange={(e) => setSessionDetails({ ...sessionDetails, session_available_slots: e.target.value })}
                    required
                  />
                </>}

            </div>
          </div>
          <div className="edit-mode-bottom">
            <button type="submit">Create Session</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      }
    </div>
  );
};

export default AddSession
