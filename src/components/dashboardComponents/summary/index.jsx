import './style.scss'

import React from 'react'

function Summary() {
  return (
<div className="summary-dashboard">
    <h1>Summary</h1>
    <div className="counsellor">
        <img src="https://tse2.mm.bing.net/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&pid=Api&P=0&h=180" alt="Counsellor" />
        <h4>Sandeep Abc</h4>
        <p>Counsellor</p>
    </div>
    <h3>Notifications</h3>
    <div className="notification">
        <img src="https://tse2.mm.bing.net/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&pid=Api&P=0&h=180" alt="" />
        <div className="content">
            <h3>New message</h3>
            <p>hii this...</p>
        </div>
    </div>
    <div className="notification">
        <img src="https://tse2.mm.bing.net/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&pid=Api&P=0&h=180" alt="" />
        <div className="content">
            <h3>New message</h3>
            <p>hii this...</p>
        </div>
    </div>
    <div className="notification">
        <img src="https://tse2.mm.bing.net/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&pid=Api&P=0&h=180" alt="" />
        <div className="content">
            <h3>New message</h3>
            <p>hii this is abc...</p>
        </div>
    </div>
    <h3>Recent Session</h3>
    <div className="sessions">
        <div className="session-content">
        <h4>Group Session</h4>
        <p>Time</p>
        <p>date</p>        
        </div>
        <div className="session-content">
        <h4>Group Session</h4>
        <p>Time</p>
        <p>date</p>        
        </div>
        <div className="session-content">
        <h4>Group Session</h4>
        <p>Time</p>
        <p>date</p>        
        </div>
    </div>
</div>
    )
}

export default Summary