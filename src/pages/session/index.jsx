import "./session.scss"
import SessionItem from "../../components/sessionItem"
import axios from "axios"
import { UserContext } from "../../context/UserContext"
import { useContext, useState } from "react"
import { backend_url } from "../../config"
import { useEffect, useRef } from "react"
import Filters from "../../components/filters"
import { RiArrowDropDownLine } from "react-icons/ri";
import { MediaQueryContext } from "../../context/MediaQueryContext" 



const Session = () => {
  const [sessions, setSessions] = useState([]);
  const { user } = useContext(UserContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const today = new Date();
  const startDate = new Date();
  const endDate = new Date();

  startDate.setDate(today.getDate() - 10);
  endDate.setDate(today.getDate() + 0);
  const defaultSessionFilters = {
    session_type: 'All',
    session_dates: [startDate, endDate],
    session_duration: 60,
    session_status: 'All',
    session_fee: [0, 5000]
  };
  const [sessionFilters, setSessionFilters] = useState(defaultSessionFilters);
  const { xSmallScreen } = useContext(MediaQueryContext)
  const resetFilters = () => {
    setSessionFilters(defaultSessionFilters);
  };

  const getResponse = async () => {
    const { data } = await axios.get(`${backend_url}/counsellor/${user._id}/sessionsforcounsellor`, {
      params: sessionFilters,
      headers: {
        Authorization: user.token
      }
    });
    setSessions(data);
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    getResponse();
  }, [sessionFilters]);

  return (
    <>
      <div className="session">
        <div className="session-header">
          <div className="left">
            <div className="reset-changes">
              <h1>
                <span  onClick={toggleDropdown}  className="fd-toggle-btn" >Filtres{" "} <RiArrowDropDownLine /></span>
              </h1>
              { !xSmallScreen && <button onClick={resetFilters}>Reset filters</button> }
              {isDropdownOpen && (
                <div ref={dropdownRef} className="dropdown-menu">
                  <div className="filter-dropdown-main" >
                    <div className='filter-dropdown-sub' >
                      <div className='fd-item fd-reset-btn' > 
                            <button onClick={resetFilters} >Reset Filters</button>
                      </div>
                      <div className='fd-item' > 
                        <Filters sessionFilters={sessionFilters} setSessionFilters={setSessionFilters} />
                      </div>
                    </div>
                </div>
                </div>
              )}
            </div>
            { !xSmallScreen && <Filters sessionFilters={sessionFilters} setSessionFilters={setSessionFilters} /> }
          </div>
        </div>
        <div className="sessionContainer">
          <div className="sessionList">
            {sessions?.map((session) => (
              <SessionItem key={session._id} session={session} setSessions={setSessions} getResponse={getResponse} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Session  