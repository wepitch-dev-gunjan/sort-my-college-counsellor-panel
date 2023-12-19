import { createContext, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [addMode, setAddMode] = useState(false);
  const [sessionLoading, setSessionLoading] = useState(false);
  const [sessions, setSessions] = useState([]);
  return (
    <SessionContext.Provider
      value={{
        addMode,
        setAddMode,
        sessionLoading,
        setSessionLoading,
        sessions,
        setSessions,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
