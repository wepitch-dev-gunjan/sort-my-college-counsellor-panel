import "./session.scss"
import SessionItem from "../../components/sessionItem"
import axios from "axios"
import { UserContext } from "../../context/UserContext"
import { useContext, useState } from "react"
import { backend_url } from "../../config"
import { useEffect } from "react"
import AddSession from "../../components/addSession";
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SessionContext } from "../../context/SessionContext"
import dayjs from "dayjs"
import Filters from "../../components/filters"
const Session = () => {

    const today = new Date();
    const startDate = new Date();
    const endDate = new Date();

    const toDateFormat = (date) => {
        return new Date(date)
    }

    startDate.setDate(today.getDate() - 10);
    endDate.setDate(today.getDate() + 0);
    const [sessionFilters, setSessionFilters] = useState({
        session_type: 'All',
        session_dates: [startDate, endDate],
        // session_duration: 60,
        // session_status: 'Booked',
        // session_fee: [1000, 5000]
    });

    const [sessions, setSessions] = useState([]);
    const { user } = useContext(UserContext);
    const { addMode, setAddMode } = useContext(SessionContext);

    const getResponse = async () => {
        console.log(sessionFilters)
        const { data } = await axios.get(`${backend_url}/counsellor/${user._id}/sessionsforcounsellor`, {
            params: sessionFilters,
            headers: {
                Authorization: user.token
            }
        });
        setSessions(data);
    }

    console.log(sessionFilters)
    useEffect(() => {
        getResponse();
    }, [sessionFilters]);

    return (
        <>
            <div className="session">
                <div className="session-header">
                    <div className="left">
                        <h1>Filtres</h1>
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