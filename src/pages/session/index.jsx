import "./session.scss"
import SessionItem from "../../components/sessionItem"
import axios from "axios"
import { UserContext } from "../../context/UserContext"
import { useContext, useState } from "react"
import { backend_url } from "../../config"
import { useEffect } from "react"
import Filters from "../../components/filters"
const Session = () => {

    const today = new Date();
    const startDate = new Date();
    const endDate = new Date();

    startDate.setDate(today.getDate() - 10);
    endDate.setDate(today.getDate() + 0);
    const [sessionFilters, setSessionFilters] = useState({
        session_type: 'All',
        session_dates: [startDate, endDate],
        session_duration: 60,
        session_status: 'All',
        session_fee: [0, 5000]
    });
    
    const defaultSessionFilters = {
        session_type: 'All',
        session_dates: [startDate, endDate],
        session_duration: 60,
        session_status: 'All',
        session_fee: [0, 5000]
    };

    const resetFilters = () => {
        setSessionFilters(defaultSessionFilters);
    };

    const [sessions, setSessions] = useState([]);
    const { user } = useContext(UserContext);

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
        getResponse();
    }, [sessionFilters]);

    return (
        <>
            <div className="session">
                <div className="session-header">
                    <div className="left">
                        <div className="reset-changes">
                        <h1>Filtres</h1>
                        <button onClick={resetFilters}>Reset filters</button>
                        </div>
                        <Filters sessionFilters={sessionFilters} setSessionFilters={setSessionFilters} />
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