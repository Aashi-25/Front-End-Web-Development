import { createContext, useState } from "react"; 

// create the context -> give some initial value(null in this case) -> export the context
export const GlobalContext = createContext(null);

//create the global state that receive component as children
export default function GlobalState({children}){

    const [theme , setTheme] = useState('light');
    return <GlobalContext.Provider value = {{ theme , setTheme }}>{children}</GlobalContext.Provider>
}