import React, { useState } from 'react';
import { Rating } from '@mui/material';
import './style.scss';
import Pagination from '../pagination';

const Feedback = ({ feedbackData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 5; // Set the number of feedback items per page

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;

  // Get the feedback items for the current page
  const currentFeedback = feedbackData.slice(startIndex, endIndex);

  const handlePageChange = (data) => {
    setCurrentPage(data.currentPage);
  };

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

      <Pagination
        totalRecords={feedbackData.length}
        pageLimit={pageLimit}
        pageNeighbours={1}
        onPageChanged={handlePageChange}
      />
    </div>
  );
};

export default Feedback;
