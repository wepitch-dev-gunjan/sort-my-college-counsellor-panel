import React, { useContext, useState } from "react";
import "./style.scss";
// import Box from '@mui/material/Box';
import Rating from "@mui/material/Rating";
import Feedback from "../../components/feedback";
import { FeedbackContext } from "../../context/FeedbackContext";

const Feedbacks = () => {
  const { feedbacks } = useContext(FeedbackContext)

  return (
    <div className="Feedbacks-container">
      <div className="feedbacks">
        {feedbacks.map((feedback, i) => (
          <Feedback
            id={feedback._id}
            user_name={feedback.user_name}
            user_pic={feedback.profile_pic}
            rating={feedback.rating}
            comment={feedback.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
