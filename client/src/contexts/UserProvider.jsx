import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const testUser = {
        id: "123",
        name: "John Doe",
        email: "johntest@test.com",
        movieList: [
            {
                id: "222333",
                viewedDate: "2021-10-01",
                rating: 4,
            },
            {
                id: "333444",
                viewedDate: "2021-10-02",
                rating: 3,
            },
            {
                id: "444555",
                viewedDate: "2021-10-03",
                rating: 5,

            }
        ],
    }

    return (
        <UserContext.Provider value={{ user, setUser, testUser }}>
            {children}
        </UserContext.Provider>
    );
}