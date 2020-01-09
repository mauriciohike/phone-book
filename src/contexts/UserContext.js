import React, { createContext, useState} from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) =>{

  const [isLoggedIn] = useState(false);

  return(
    <UserContext.Provider value={{isLoggedIn}}>
      {props.children}
    </UserContext.Provider>
  );

};

export default UserContextProvider;