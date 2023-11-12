import "./session.scss"
import SessionItem from "../../components/sessionItem"
import axios from "axios"
import { UserContext } from "../../context/UserContext"
import { useContext, useState } from "react"
import { backend_url } from "../../config"
import { useEffect } from "react"
import AddSession from "../../components/addSession"
const Session = () => {
    const [sessions, setSessions] = useState([]);
    const { user } = useContext(UserContext);
    const [addMode, setAddMode] = useState(false);

    const getResponse = async () => {
        const response = await axios.get(`${backend_url}/${user._id}/sessions`, {})
        setSessions(response.data);
    }
    useEffect(() => {
        getResponse();
        console.log(user)
    }, []);
    return (
        <>
            <div className="session">
                <div className="session-header">
                    <div className="left">
                        gfgf
                    </div>
                    <div className="right">
                        <div className='primary-button add-session-button' onClick={setAddMode}>Add Session
                        </div>
                    </div>
                </div>
                <div className="sessionContainer">
                    <div className="add-session">

                    </div>
                    {addMode && <AddSession sessions={sessions} setSessions={setSessions} setAddMode={setAddMode} />}
                    <div className="sessionList">
                        {sessions.map((session) => (
                            <SessionItem key={session.id} session={session} setSessions={setSessions} getResponse={getResponse} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Session  