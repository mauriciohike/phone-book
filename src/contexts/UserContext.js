import React, { createContext, Component} from 'react';

export const UserContext = createContext();

export default class UserContextProvider extends Component {

    state = {
        isLoggedIn: true
    }

  render() {
    return(
        <UserContext.Provider value={{...this.state}}>
            {this.props.children}
        </UserContext.Provider>
    );
  }
}
