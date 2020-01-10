import React, { createContext, useReducer, useEffect} from 'react';
import { userListReducer } from '../reducers/userListReducer';

export const UserListContext = createContext();

const UserListContextProvider = (props) =>{

    const [userList, dispatch] = useReducer(userListReducer, [], () =>{
        const localData = localStorage.getItem('userList');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() =>{
        localStorage.setItem('userList', JSON.stringify(userList))
    }, [userList]);

    return(
        <UserListContext.Provider value={{userList, dispatch}}>
            { props.children }
        </UserListContext.Provider>
    )
}

export default UserListContextProvider;