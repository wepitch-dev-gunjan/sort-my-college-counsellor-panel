import { NotificationContext } from '../../../context/NotificationContext'
import Notification from './notification'
import RecentSession from './recentSession'
import './style.scss'


import React, { useContext, useState } from 'react'

function Summary() {
    const [sessions, setSessions] = useState([
        {
            session_type: 'Group',
            session_date: "new Date()",
            session_time: "new Date()",
        },
        {
            session_type: 'Personal',
            session_date: "new Date()",
            session_time: "new Date()",
        },
        {
            session_type: 'Group',
            session_date: "new Date()",
            session_time: "new Date()",
        },
        {
            session_type: 'Group',
            session_date: "new Date()",
            session_time: "new Date()",
        },
        {
            session_type: 'Group',
            session_date: "new Date()",
            session_time: "new Date()",
        },
        {
            session_type: 'Group',
            session_date: "new Date()",
            session_time: "new Date()",
        },
        {
            session_type: 'Group',
            session_date: "new Date()",
            session_time: "new Date()",
        },
    ])

    const { notifications, setNotifications } = useContext(NotificationContext);
    return (
        <div className="summary-dashboard">
            <h1>Summary</h1>
            <div className="counsellor">
                <img src="https://tse2.mm.bing.net/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&pid=Api&P=0&h=180" alt="Counsellor" />
                <h4>Sandeep Abc</h4>
                <p>Counsellor</p>
            </div>
            <h3>Notifications</h3>
            <div className="notifications-container">
                {notifications.map((notification, i) => (
                    <Notification key={i} title={notification.title} message={notification.message} read />
                ))}
            </div>
            <h3>Recent Sessions</h3>
            <div className="sessions">
                {sessions.map((session, i) => (
                    <RecentSession
                        key={i}
                        type={session.session_type}
                        date={session.session_date}
                        time={session.session_time}
                    />
                ))}
            </div>
        </div>
    )
}

export default Summary