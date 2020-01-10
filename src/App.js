import React from 'react';
import Routes from './router';

import GlobalStyle from './styles/global';
import UserContextProvider from './contexts/UserContext';
import UserListContextProvider from './contexts/UserListContext';
import { ToastContainer } from 'react-toastify';
import ContactContextProvider from './contexts/ContactContext';

function App() {
  return (
    <div className="App">
      <UserListContextProvider>
        <UserContextProvider>
          <ContactContextProvider>
            <GlobalStyle/>
            <ToastContainer autoClose={3000}/>
            <Routes/>
          </ContactContextProvider>
        </UserContextProvider>
      </UserListContextProvider>
    </div>
  );
}

export default App;
