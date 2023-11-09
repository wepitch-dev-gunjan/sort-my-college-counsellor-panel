import "./session.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import SessionItem from "../../components/sessionItem"
import axios from "axios"
import { UserContext } from "../../context/UserContext"
import { useContext, useState } from "react"
import { backend_url } from "../../config"
import { useEffect } from "react"
// import { Widgets } from "@mui/icons-material"
const Session = () => {
    const [sessions, setSessions] = useState([]);
    const { user } = useContext(UserContext);
    const handleAddSession = async () => {
        const response = await axios.post(`${backend_url}/sessions`, {
            session_date: "2023-11-10",
            session_time: "14:30",
            session_duration: 60,
            session_type: "Personal",
            session_fee: 50
        }, {
            headers: {
                "Authorization": user.token
            }
        })
            .then(response => {
                console.log('Session added successfully');
                console.log(response.data)
                // You can add further actions here upon successful response
                setSessions(prev => [...prev, response.data.session]);
            })
            .catch(error => {
                window.alert(error.response.data.error)
                console.error('An error occurred:', error);
            });

    };
    const getResponse = async () => {
        const response = await axios.get(`${backend_url}/${'654a234e210d0a9a0951b8f5'}/sessions`, {})
        setSessions(response.data);
    }
    useEffect(() => {
        getResponse();
    }, []);
    return (
        <>
            <div className="session">
                <div className="sessionContainer">
                    <div className='primary-button add-session-button' onClick={handleAddSession}>Add Session
                    </div>
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