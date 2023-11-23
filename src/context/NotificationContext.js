import { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationsEnable, setNotificationsEnable] = useState(true);
  const [notifications, setNotifications] = useState([
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365452",
      title: "New Follower",
      message: "Naman followed you",
      read: false,
    },
    {
      _id: "12365452",
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
