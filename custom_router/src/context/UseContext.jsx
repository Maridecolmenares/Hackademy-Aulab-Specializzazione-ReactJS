import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState();

    const register = (newUser) => setUser(newUser);
    const logout = () => setUser(null);

    return (
        <UserContext.Provider value={{ user, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}