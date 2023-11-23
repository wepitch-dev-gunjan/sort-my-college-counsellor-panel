import React, { useContext, useRef, forwardRef } from "react";
import "./style.scss";
import Notification from "./notification";
import { NotificationContext } from "../../context/NotificationContext";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { backend_url } from "../../config";

const Notifications = forwardRef((_, ref) => {
  const { notifications, setNotifications } = useContext(NotificationContext);
  const { user } = useContext(UserContext);

  const handleNotificationClick = async (notificationId, i, read) => {
    if (!read) {
      try {
        // Update the database via an API call using Axios
        // await axios.put(
        //   `${backend_url}/counsellor/notification/${notificationId}`,
        //   { read: true },
        //   {
        //     headers: {
        //       Authorization: user.token, // Fixed typo in Authorization
        //     },
        //   }
        // );

        // Update local state and UI
        const updatedNotifications = [...notifications];
        updatedNotifications[i] = {
          ...updatedNotifications[i],
          read: true,
        };
        setNotifications(updatedNotifications);
      } catch (error) {
        console.error("Error updating notification status:", error);
        // Handle error scenarios here
      }
    }
  };

  return (
    <div ref={ref} className="Notifications-container">
      {notifications.map((notification, i) => (
        <div key={i}>
          <Notification
            notificationId={notification._id}
            title={notification.title}
            message={notification.message}
            handleNotificationClick={handleNotificationClick}
            index={i}
            read={notification.read}
          />
        </div>
      ))}
    </div>
  );
});

export default Notifications;
