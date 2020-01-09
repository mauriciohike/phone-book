import React, { createContext, useState} from 'react';

export const UserListContext = createContext();

const UserListContextProvider = (props) =>{

    const [userList] = useState([
        { 
            id: 1, 
            name: 'Mauricio',
            email: 'mauriciorenanvs@gmail.com' ,
            password: '1234'
        }
    ]);

    return(
        <UserListContext.Provider value={{userList}}>
            {props.children}
        </UserListContext.Provider>
    )
}

export default UserListContextProvider;