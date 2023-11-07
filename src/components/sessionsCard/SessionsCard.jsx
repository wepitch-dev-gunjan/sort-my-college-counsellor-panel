import "./sessionsCard.scss"

const SessionsCard = () => {
  return (
    <div className="sessionCard">
      <div className="sessionCardProfile">
        <div className="sessionTitle">
          Morning Session
        </div>
      </div>
      <div className="cardDetails">
        <div className="sessionCardLeft">Date <br /> 26/10/2023</div>
        <div className="sessionCardRight">Time <br /> 10:00 am </div>
      </div>
      <div className="cardDetails">
        <div className="sessionCardLeft">Session Type <br /> Private</div>
        <div className="sessionCardRight">Staus <br /> Booked </div>
      </div>
      <div className="sessionAction">
        <button>
          Join Meeting
        </button>
        <button>View Details</button>
      </div>
    </div>
  )
}

export default SessionsCard