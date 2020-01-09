import React, { createContext, useReducer} from 'react';
import { userListReducer } from '../reducers/userListReducer';

export const UserListContext = createContext();

const UserListContextProvider = (props) =>{

    const [userList, dispatch] = useReducer(userListReducer, [
        {
            id: 1,
            name: 'Admin',
            email: 'admin@admin',
            password: 'Admin'
         }
    ]);

    return(
        <UserListContext.Provider value={{userList, dispatch}}>
            { props.children }
        </UserListContext.Provider>
    )
}

export default UserListContextProvider;