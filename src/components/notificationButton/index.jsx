import { IoIosNotificationsOutline } from "react-icons/io";
import "./style.scss";
const NotificationButton = ({ onClick }) => {
  return (
    <div
      onClick={() => onClick((prev) => !prev)}
      className="NotificationsButton-container"
    >
      <IoIosNotificationsOutline size="24" />
    </div>
  );
};

export default NotificationButton;
