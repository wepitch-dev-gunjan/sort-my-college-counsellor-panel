import { useContext, useEffect, useState } from "react";
import RecentPayments from "../../components/dashboardComponents/RecentPayments";
import Summary from "../../components/dashboardComponents/summary";
import Widget from "../../components/dashboardComponents/widget";
import "./style.scss";
import { MediaQueryContext } from "../../context/MediaQueryContext";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import config from "@/config";
import { DashboardContext } from "../../context/DashboardContext";
import { ProfileContext } from "../../context/ProfileContext";
import Payment from "../payment";
const { backend_url } = config;

const Dashboard = () => {
  const { dashboardData } = useContext(DashboardContext);
  const { smallScreen } = useContext(MediaQueryContext);
  const { profile, setProfile } = useContext(ProfileContext);
  const { user } = useContext(UserContext);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const incrementActivityPoint = async () => {
      const lastCheckinDate = new Date(profile.last_checkin_date)
        .toString()
        .slice(0, 10);
      // changed toISOString to toString line22 line24
      const currentDate = new Date().toString().slice(0, 10);

      if (lastCheckinDate !== currentDate) {
        try {
          const { data } = await axios.put(
            `${backend_url}/counsellor/activity/increment-activity-points`,
            null,
            {
              headers: {
                Authorization: user.token,
              },
            }
          );
          console.log(data);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };
    incrementActivityPoint();
  }, []);

  return (
    <div className="all-dashboard">
      <div className="Dashboard-container">
        <div className="business-dashbaord">
          <h1>Business Dashboard</h1>
          <div className="widgets-container">
            <Widget heading="FOLLOWERS" value={dashboardData.totalFollowers} />
            <Widget heading="INCOME" value="$10000" />
            <Widget heading="SESSIONS" value={dashboardData.totalSessions} />
          </div>
        </div>

        {/* recent payments */}
        {/* {isSmallScreen ? null : <RecentPayments />} */}
        {/* <RecentPayments /> */}
        <div className="dashboard-recent-payments-main">
          {/* <RecentPayments /> */}
          <Payment />
        </div>
      </div>
      {/* <div className="summary">{!smallScreen && <Summary />}</div> */}
    </div>
  );
};

export default Dashboard;
