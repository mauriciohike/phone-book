import React, { createContext, useReducer, useEffect} from 'react';
import { contactReducer } from '../reducers/contactReducer';

export const ContactContext = createContext();

const ContactContextProvider = (props) =>{

    const [contactList, dispatch] = useReducer(contactReducer, [], () =>{
        const localData = localStorage.getItem('contactList');
        return localData ? JSON.parse(localData) : []; 
    });

    useEffect(() =>{
        localStorage.setItem('contactList', JSON.stringify(contactList))
    }, [contactList]);

    return(
        <ContactContext.Provider value={{contactList, dispatch}}>
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactContextProvider;