import React from 'react';
import Routes from './router';

import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle/>
        <Routes/>
      </>
    </div>
  );
}

export default App;
