import { createContext, useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext';
import axios from 'axios';
import { backend_url } from '../config';

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [feedbacks, setFeedbacks] = useState([]);

  const getFeedbacks = async () => {
    try {
      const { data } = await axios.get(`${backend_url}/counsellor/feedback/getall`,
        null,
        {
          params: {
            counsellor_id: user._id,
            page: 1,
            limit: 10
          }
        });
      console.log(data)
      setFeedbacks(data.data);
    } catch (error) {
      // Handle errors here
      console.error("Error fetching feedbacks:", error);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  // Pass the feedbacks state as the value to the Provider
  return (
    <FeedbackContext.Provider value={{ feedbacks }}>
      {children}
    </FeedbackContext.Provider>
  );
};
