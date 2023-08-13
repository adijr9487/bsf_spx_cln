import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  return <UserContext.Provider value={{ user, setUser }}>
    {props.children}
  </UserContext.Provider>;
};

export default UserProvider;
