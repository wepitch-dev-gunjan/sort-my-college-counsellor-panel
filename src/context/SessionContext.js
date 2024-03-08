import { createContext, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [addMode, setAddMode] = useState(false);
  const [sessionLoading, setSessionLoading] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [rerender,setRerender]=useState(false)
  return (
    <SessionContext.Provider
      value={{
        addMode,
        setAddMode,
        sessionLoading,
        setSessionLoading,
        sessions,
        setSessions,
        rerender,
        setRerender
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
