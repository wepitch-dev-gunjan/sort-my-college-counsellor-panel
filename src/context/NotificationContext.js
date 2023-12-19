import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import { backend_url } from "../config";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationsEnable, setNotificationsEnable] = useState(false);
  const { user } = useContext(UserContext);

  const [notifications, setNotifications] = useState([]);
  const getNotifications = async () => {
    console.log(user)
    const { data } = await axios.get(`${backend_url}/notification`, {
      params: {
        user_id: user._id,
      },
    });
    setNotifications(data.notifications);
  };

  useEffect(() => {
    getNotifications()
  }, []);
  return (
    <NotificationContext.Provider
      value={{
        notifications,
        setNotifications,
        notificationsEnable,
        setNotificationsEnable,
        getNotifications
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
