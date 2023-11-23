import "./style.scss";
import { NotificationContext } from "../../context/NotificationContext";
import { useContext } from "react";
import Notification from "./notification";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { backend_url } from "../../config";

const Notifications = () => {
  const { notifications, setNotifications } = useContext(NotificationContext);
  const { user } = useContext(UserContext);

  const handleNotificationClick = async (notificationId, read, i) => {
    if (read) {
      try {
        // Update the database via an API call using Axios
        await axios.put(
          `${backend_url}/counsellor/notification/${notificationId}`,
          { read: true },
          {
            headers: {
              Athorization: user.token,
            },
          }
        );

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
    <div className="Notifications-container">
      <h3>Notifications</h3>
      {notifications.map((notification, i) => (
        <div key={i}>
          <Notification
            notificationId={notification._id}
            title={notification.title}
            message={notification.message}
            handleNotificationClick={handleNotificationClick}
            index={i}
          />
        </div>
      ))}
    </div>
  );
};

export default Notifications;
