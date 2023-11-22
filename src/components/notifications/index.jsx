import "./style.scss";
import { NotificationContext } from "../../context/NotificationContext";
import { useContext } from "react";

const Notifications = ({ title, message }) => {
  const { notifications, setNotifications } = useContext(NotificationContext);

  return (
    <div className="Notifications-container">
      <h3>Notifications</h3>
      <div className="Notification-container">
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notifications;
