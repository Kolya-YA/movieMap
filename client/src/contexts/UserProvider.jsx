import axios from "axios"; 
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 > Date.now()) {
                setUser(decodedToken);

                axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            } else {
                localStorage.removeItem("token");
            }
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser,  }}>
            {children}
        </UserContext.Provider>
    );
}