import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
    const [data, setData] = useState('Hello there!');

    const changeData = (message) => setData(message);

    return (
        <Context.Provider value={{ data, changeData }}>
            {children}
        </Context.Provider>
    )
}