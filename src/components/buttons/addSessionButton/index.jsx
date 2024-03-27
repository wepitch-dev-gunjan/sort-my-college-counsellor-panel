import { useContext } from "react";
import './style.scss';
import { SessionContext } from "../../../context/SessionContext";
import { useNavigate } from "react-router-dom";

const AddSessionButton = () => {
  const { setAddMode } = useContext(SessionContext);
  const navigate = useNavigate()

  const handleClick = () => {
    setAddMode(prev => !prev);
    navigate('/session')
  }

  return (
    <div className='AddSessionButton-container'>
      <div className='primary-button add-session-button' onClick={handleClick}><h5>Add Session</h5>
      </div>
    </div>
  );
};

export default AddSessionButton;