import { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      title: 'New Follower',
      message: "Naman followed you",
      read: false
    },
    {
      title: 'New Follower',
      message: "Naman followed you",
      read: false
    },
    {
      title: 'New Follower',
      message: "Naman followed you",
      read: false
    },
    {
      title: 'New Follower',
      message: "Naman followed you",
      read: false
    },
    {
      title: 'New Follower',
      message: "Naman followed you",
      read: false
    },
    {
      title: 'New Follower',
      message: "Naman followed you",
      read: false
    },
  ]);
  return <NotificationContext.Provider value={{ notifications, setNotifications }}>
    {children}
  </NotificationContext.Provider>
}