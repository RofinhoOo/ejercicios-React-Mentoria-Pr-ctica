import React, { createContext, useContext, useEffect, useState} from "react";
import { getAgenda } from "../service/contact";
import { AGENDA_URL, AGENDA_SLUG, CONTACT_URL } from './constants';

const Context = createContext()

export const ContextProvider = ({ children }) => {

    const [agenda, setAgenda] = useState([]);


   useEffect(() =>{
        getAgenda(AGENDA_URL, setAgenda);
        
   },[])

   

    const store = {agenda};
    const actions = {};

    return(
        <Context.Provider value={{store, actions}}>
            { children }
        </Context.Provider>
    )
}

const useAppContext = () => useContext(Context);

export default useAppContext;

