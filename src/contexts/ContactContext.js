import React, { createContext, useReducer} from 'react';
import { contactReducer } from '../reducers/contactReducer';

export const ContactContext = createContext();

const ContactContextProvider = (props) =>{

    const [contactList, dispatch] = useReducer(contactReducer, [
        {
            id: 1,
            name: 'Mauricio',
            email: 'mauricio@gmail.com',
            phone: '41987732067',
            type: 'public'
         }
    ]);

    return(
        <ContactContext.Provider value={{contactList, dispatch}}>
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactContextProvider;