import { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationsEnable, setNotificationsEnable] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      _id: "12365451",
      title: "New Follower",
      message: "Naman followed you",
      read: true,
    },
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: true,
    },
    {
      _id: "12365453",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365454",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365455",
      title: "New Follower",
      message: "Naman followed you",
      read: true,
    },
    {
      _id: "12365456",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365457",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365458",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365459",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365460",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365461",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365462",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365463",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365464",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
  ]);
  return (
    <NotificationContext.Provider
      value={{
        notifications,
        setNotifications,
        notificationsEnable,
        setNotificationsEnable,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
