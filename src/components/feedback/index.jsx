import React, { useState } from 'react';
import { Rating } from '@mui/material';
import './style.scss';

const Feedback = ({ feedbackData }) => {
 
 
  // Get the feedback items for the current page
  const currentFeedback = feedbackData.slice();

  
  return (
    <div className='Feedback-container'>
      {currentFeedback.map((feedback) => (
        <div key={feedback.id}>
          <div className="top">
            <div className="left">
              <img src={feedback.user_pic} alt="" />
            </div>
            <div className="right">
              <h3>{feedback.user_name}</h3>
              <div className="rating">
                <Rating name='read only' value={feedback.rating} readOnly />
              </div>
            </div>
          </div>
          <div className="bottom">
            <p>{feedback.comment}</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Feedback;
