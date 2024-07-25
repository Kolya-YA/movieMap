import { createContext } from "react";
import { useUser } from "../hooks";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const userState = useUser();

    return (
        <UserContext.Provider value={userState}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };