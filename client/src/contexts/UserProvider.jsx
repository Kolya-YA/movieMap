import { createContext } from "react";
import { useUser } from "../hooks";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const userState = useUser();

    return (
        <UserContext.Provider value={userState}>
            {children}
        </UserContext.Provider>
    );
};