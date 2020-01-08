import React from 'react';
import Routes from './router';

import GlobalStyle from './styles/global';
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    <div className="App">
      <>
        <UserContextProvider>
          <GlobalStyle/>
          <Routes/>
        </UserContextProvider>
      </>
    </div>
  );
}

export default App;
