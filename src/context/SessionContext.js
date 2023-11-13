import { createContext, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [addMode, setAddMode] = useState(false)
  return <SessionContext.Provider value={{ addMode, setAddMode }}>
    {children}
  </SessionContext.Provider>
}