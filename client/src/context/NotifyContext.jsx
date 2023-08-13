import React, { useState, createContext, useEffect } from "react";

export const NotifyContext = createContext();

const NotifyProvider = (props) => {
  const [notify, setNotify] = useState(null);

  return (
    <NotifyContext.Provider value={{ notify, setNotify }}>
      {props.children}
    </NotifyContext.Provider>
  );
};

export default NotifyProvider;
