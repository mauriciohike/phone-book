import React, { Component } from 'react';
import { UserContext } from '../../contexts/UserContext';

// import { Container } from './styles';

export default class Home extends Component {

  render() {
    return (
      <UserContext.Consumer>{(context) =>{

          const { isLoggedIn } = context;

          return(
            <h1>{ isLoggedIn ? 'Você está logado!' : 'Logue agora =)' }</h1>
          );

        }}</UserContext.Consumer>
    );
  }
}
