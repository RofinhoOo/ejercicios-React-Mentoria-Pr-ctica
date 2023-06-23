import React, { createContext, useContext, useState} from "react";

const Context = createContext()

export const ContextProvider = ({ children }) => {

    const [counter, setCounter] = useState(0);

    const handleSum = () =>{
        setCounter(counter + 1);
    }

    const store = {counter};
    const actions = {handleSum};

    return(
        <Context.Provider value={{store, actions}}>
            { children }
        </Context.Provider>
    )
}

const useAppContext = () => useContext(Context);

export default useAppContext;

