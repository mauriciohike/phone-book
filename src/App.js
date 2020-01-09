import React from 'react';
import Routes from './router';

import GlobalStyle from './styles/global';
import UserContextProvider from './contexts/UserContext';
import UserListContextProvider from './contexts/UserListContext';

function App() {
  return (
    <div className="App">
      <UserListContextProvider>
        <UserContextProvider>
          <GlobalStyle/>
          <Routes/>
        </UserContextProvider>
      </UserListContextProvider>
    </div>
  );
}

export default App;
