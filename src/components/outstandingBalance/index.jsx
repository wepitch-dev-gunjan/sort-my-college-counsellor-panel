import React, { useContext } from "react";
import "./style.scss"; // Import the SCSS file
import { ProfileContext } from "../../context/ProfileContext";

const OutstandingBalance = () => {
  const { profile } = useContext(ProfileContext);
  console.log("profile,0", profile);
  return (
    <div className="tooltip-container">
      <h4 className="tooltip">
        {" "}
        OutStanding Balance = {profile.outstanding_balance}
      </h4>
    </div>
  );
};

export default OutstandingBalance;
