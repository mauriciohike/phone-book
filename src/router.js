import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/" exact component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}