import "./session.scss"
import SessionItem from "../../components/sessionItem"
import axios from "axios"
import { UserContext } from "../../context/UserContext"
import { useContext, useState } from "react"
import { backend_url } from "../../config"
import { useEffect } from "react"
import AddSession from "../../components/addSession"
import { SessionContext } from "../../context/SessionContext"
const Session = () => {
    const [sessions, setSessions] = useState([]);
    const { user } = useContext(UserContext);
    const { addMode, setAddMode } = useContext(SessionContext);

    const getResponse = async () => {
        const { data } = await axios.get(`${backend_url}/counsellor/${user._id}/sessions`, {});
        const { sessions } = data;
        setSessions(sessions);
    }

    useEffect(() => {
        getResponse();
    }, []);

    return (
        <>
            <div className="session">
                <div className="session-header">
                    <div className="left">
                        <h1>Filtres</h1>
                    </div>
                    <div className="right">

                    </div>
                </div>
                <div className="sessionContainer">
                    {/* <div className="add-session">
                        {addMode && <AddSession sessions={sessions} setSessions={setSessions} setAddMode={setAddMode} />}
                    </div> */}
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