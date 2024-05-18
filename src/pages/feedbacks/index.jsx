import React, { useContext, useEffect } from "react";
import "./style.scss";
import Feedback from "../../components/feedback";
import { FeedbackContext } from "../../context/FeedbackContext";

const Feedbacks = () => {
  const { feedbacks, currentPage, totalPages, getFeedbacks, setCurrentPage } =
    useContext(FeedbackContext);

  useEffect(() => {
    getFeedbacks(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when component mounts
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="Feedbacks-container">
      <div className="feedbacks">
        {!feedbacks ? (
          <p>Loading feedbacks...</p>
        ) : feedbacks.length === 0 ? (
          <p>No Feedbacks Yet</p>
        ) : (
          feedbacks.map((feedback, i) => (
            <Feedback
              key={i}
              id={feedback._id}
              user_name={feedback.user_name}
              user_pic={feedback.profile_pic}
              rating={feedback.rating}
              comment={feedback.message}
            />
          ))
        )}
      </div>
      <div className="pagination">
        <span
          className={`pagination-arrow ${currentPage === 1 ? "disabled" : ""}`}
          onClick={handlePreviousPage}
        >
          &#9664; {/* Left arrow */}
        </span>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <span
          className={`pagination-arrow ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={handleNextPage}
        >
          &#9654; {/* Right arrow */}
        </span>
      </div>
    </div>
  );
};

export default Feedbacks;
