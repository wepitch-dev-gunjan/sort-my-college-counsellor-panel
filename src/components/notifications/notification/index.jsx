import './style.scss'

const Notification = ({ handleNotificationClick, notificationId, title, message, read, index }) => {
  return (
    <div className={`Notification-container ${read && "read"}`}
      onClick={() => handleNotificationClick(notificationId, read, index)}>
      <h4>{title}</h4>
      <p>{message}</p>
    </div>
  );
};

export default Notification;