import { useContext, useEffect, useState } from "react";
import RecentPayments from "../../components/dashboardComponents/RecentPayments";
import Summary from "../../components/dashboardComponents/summary";
import Widget from "../../components/dashboardComponents/widget";
import "./style.scss";
import { MediaQueryContext } from "../../context/MediaQueryContext";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { backend_url } from "../../config";
import { DashboardContext } from "../../context/DashboardContext";

const Dashboard = () => {
  const { dashboardData } = useContext(DashboardContext)
  const { smallScreen } = useContext(MediaQueryContext);

  console.log(dashboardData)
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
        <RecentPayments />
      </div>
      <div className="summary">{!smallScreen && <Summary />}</div>
    </div>
  );
};

export default Dashboard;
