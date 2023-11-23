import { IoIosNotificationsOutline } from "react-icons/io";
import "./style.scss";
import { Tooltip, Typography } from "@mui/material";
const NotificationButton = ({ onClick }) => {
  return (
    <Tooltip
      title={
        <Typography style={{ fontSize: "16px" }}>Notifications</Typography>
      }
      placement="bottom"
      arrow
      PopperProps={{
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 10],
            },
          },
        ],
      }}
    >
      <div
        onClick={() => onClick((prev) => {
          if (!prev)
            return true;
        })}
        className="NotificationsButton-container"
      >
        <IoIosNotificationsOutline size="24" />
      </div>
    </Tooltip>
  );
};

export default NotificationButton;
