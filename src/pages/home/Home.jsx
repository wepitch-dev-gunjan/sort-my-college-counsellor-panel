import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widgets from "../../components/widgets/Widgets"
// import Navbar from "../../components/navbar/Navbar"
import "./home.scss"

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <div>
            <Sidebar />
          </div>
          <div className="homeContainer">
            <div className="widgets">
              <Widgets type="followers" />
              <Widgets type="privateSession" />
              <Widgets type="groupSession" />
              <Widgets type="nextMeeting" />
              <Widgets type="ratings" />

            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home

