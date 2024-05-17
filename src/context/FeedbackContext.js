import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import config from "@/config";
const { backend_url } = config;

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getFeedbacks = async (page = 1, limit = 10) => {
    try {
      const { data } = await axios.get(
        `${backend_url}/counsellor/feedback/getall`,
        {
          params: {
            counsellor_id: user._id,
            page,
            limit,
          },
        }
      );
      setFeedbacks(data.feedbacks);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  useEffect(() => {
    if (user && user._id) {
      getFeedbacks();
    }
  }, [user]);

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        currentPage,
        totalPages,
        getFeedbacks,
        setCurrentPage,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
