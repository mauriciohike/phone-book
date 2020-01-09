import React, { createContext, useState} from 'react';
import uuid from 'uuid/v1';

export const UserListContext = createContext();

const UserListContextProvider = (props) =>{

    const [userList, setUserList] = useState([
        { 
            id: 1, 
            name: 'Mauricio',
            email: 'mauriciorenanvs@gmail.com' ,
            password: '1234'
        }
    ]);

    const addUser = (name, email, password) =>{
        setUserList([...userList, {id: uuid(), name, email, password}])
    }

    return(
        <UserListContext.Provider value={{userList, addUser}}>
            { props.children }
        </UserListContext.Provider>
    )
}

export default UserListContextProvider;