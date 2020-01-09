import React, { createContext, useState} from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) =>{

  const [isLoggedIn] = useState(false);
  const [user] = useState({})

  return(
    <UserContext.Provider value={{isLoggedIn, user}}>
      {props.children}
    </UserContext.Provider>
  );

};

export default UserContextProvider;