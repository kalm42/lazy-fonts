import React, { createContext } from "react";
import { useAuth } from "./auth-context";

const UserContext = createContext();

const useUser = () => React.useContext(UserContext);

const UserProvider = props => {
  const { data } = useAuth();
  return <UserContext.Provider value={data ? data.me : null} {...props} />;
};

export { UserProvider, useUser };
