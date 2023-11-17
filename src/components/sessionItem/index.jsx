import React, { useContext, useRef, useState } from 'react';
import axios from 'axios';
import { CiMenuKebab } from 'react-icons/ci';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import "./session.scss";
import { UserContext } from '../../context/UserContext';
import { backend_url } from '../../config';
import useClickOutside from '../../customHooks/useClickOutside';

const SessionCard = ({ session, setSessions, getResponse }) => {
  const menuRef = useRef(null)
  const { user } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [sessionDetails, setSessionDetails] = useState(session);

  useClickOutside(menuRef, () => {
    setShowMenu(false);
  });

  const handleSave = async () => {
    try {
      const response = await axios.put(`${backend_url}/sessions/${sessionDetails._id}`, sessionDetails, {
        headers: {
          Authorization: user.token
        }
      });
      console.log('Session updated successfully', response.data);
      setEditMode(false);
      setSessions(prev => prev.map(item => (item._id === sessionDetails._id ? item : response.data.session)));
      // Perform any state updates or re-fetch the session list as needed
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleCancel = () => {
    setSessionDetails(session);
    setEditMode(false);
  };

  const handleJoinNow = () => {
    if (session.session_link) {
      window.open(session.session_link, '_blank');
    }
  };

  const handleDelete = async () => {
    try {
      // Send an axios request to the server to delete the session
      const response = await axios.delete(`${backend_url}/sessions/${session._id}`, {
        headers: {
          Authorization: user.token
        }
      });
      console.log('Session deleted successfully', response.data);
      // You can add further actions here upon successful response
      getResponse();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="session-item">
      <div className="top">
        <h2>{session.session_type + ' Session'}</h2>
        <div className="drop-down-button" onClick={() => setShowMenu(true)} >
          <CiMenuKebab />
        </div>
      </div>

      {<div ref={menuRef} className={`${showMenu && 'display-active'} drop-down-menu`}>
        <div onClick={() => setEditMode(true)} className="menu-item">
          <AiOutlineEdit />
          <span>Edit</span>
        </div>
        <div onClick={handleDelete} className="menu-item">
          <AiOutlineDelete />
          <span>Delete</span>
        </div>
      </div>}

      {editMode ? (
        <form className='edit-mode-form' onSubmit={handleSave}>
          <div className='edit-mode-form'>
            <div className="edit-mode-fields">
              <div>
                <p>Date:</p>
                <input
                  type="date"
                  value={sessionDetails.session_date}
                  onChange={(e) =>
                    setSessionDetails({ ...sessionDetails, session_date: e.target.value })
                  }
                />
              </div>
              <div>
                <p>Time:</p>
                <input
                  type="text"
                  value={sessionDetails.session_time}
                  onChange={(e) =>
                    setSessionDetails({ ...sessionDetails, session_time: e.target.value })
                  }
                />
              </div>
              <div>
                <p>Duration:</p>
                <input
                  type="number"
                  value={sessionDetails.session_duration}
                  onChange={(e) =>
                    setSessionDetails({
                      ...sessionDetails,
                      session_duration: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <p>Type:</p>
                <input
                  type="text"
                  value={sessionDetails.session_type}
                  onChange={(e) =>
                    setSessionDetails({ ...sessionDetails, session_type: e.target.value })
                  }
                />
              </div>
              <div>
                <p>Fee:</p>
                <input
                  type="number"
                  value={sessionDetails.session_fee}
                  onChange={(e) =>
                    setSessionDetails({ ...sessionDetails, session_fee: e.target.value })
                  }
                />
              </div>
              <div>
                <p>Status:</p>
                <input
                  type="text"
                  value={sessionDetails.session_status}
                  onChange={(e) =>
                    setSessionDetails({
                      ...sessionDetails,
                      session_status: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <p>Available Slots:</p>
                <input
                  type="number"
                  value={sessionDetails.session_available_slots}
                  onChange={(e) =>
                    setSessionDetails({
                      ...sessionDetails,
                      session_available_slots: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="edit-mode-bottom">
              <button onClick={handleSave} type="submit">
                Save
              </button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      ) : (
        <>
          <div className="middle">
            <p>Date: {session.session_date}</p>
            <p>Time: {session.session_time}</p>
            <p>Duration: {session.session_duration} minutes</p>
            <p>Type: {session.session_type}</p>
            <p>Fee: {session.session_fee}</p>
            <p>Status: {session.session_status}</p>
            <p>Available Slots: {session.session_available_slots}</p>
          </div>

          <div className="bottom">
            <button onClick={handleJoinNow}>Join Now</button>
          </div>
        </>
      )}


    </div>
  );
};

export default SessionCard;
