import "./session.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
// import Widgets from "../../components/widgets/Widgets"
import SessionsCard from "../../components/sessionsCard/SessionsCard"
// import { Widgets } from "@mui/icons-material"
const Session = () => {
  return (
<>
    <div className="session">
        <Sidebar/>
        <div className="sessionContainer">
            <Navbar/>
            {/* <Widgets type="followers"/> */}
            <div className="addSession">
                <button>Add Session</button>
                <div className="sessionSort">
                    <b>Sort By</b>
                    <select className="SortDropdown" id="cars">
                        <option value="volvo">Todays</option>
                        <option value="volvo">Tomorrow</option>

                        <option value="saab">Pending</option>
                        <option value="mercedes">Upcoming</option>
                        <option value="audi">Audi</option>
                    </select>   
                </div>
            </div>
            <div className="sessionList">

            <SessionsCard/>
            <SessionsCard/>
            <SessionsCard/>
            <SessionsCard/>
            <SessionsCard/>
            <SessionsCard/>

            <SessionsCard/>
            </div>

        </div>
    </div>
</>
    )
}

export default Session  