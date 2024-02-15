import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { backend_url } from "../config";
import { UserContext } from "./UserContext";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [followersCount, setFollowersCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFollowersCount = async () => {
      try {
        if (user && user.token) {
          const response = await axios.get(
            `${backend_url}/counsellor/follower/followers-count`,
            {
              headers: {
                Authorization: user.token
              }
            }
          );
          setFollowersCount(response.data.totalFollowers);
        } else {
          setFollowersCount(0); // Set followers count to 0 if user or token is not available
        }
        setLoading(false); // Update loading state
        setError(null); // Reset error state on successful response
      } catch (error) {
        setError(error.message); // Set error state with the error message
        setLoading(false); // Update loading state
        setFollowersCount(0); // Reset followers count on error
      }
    };

    getFollowersCount();
  }, [user]); // Run the effect whenever the user changes

  return (
    <DashboardContext.Provider
      value={{
        followersCount,
        setFollowersCount,
        error,
        loading
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
