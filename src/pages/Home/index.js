import React, { Component } from 'react';
import { UserContext } from '../../contexts/UserContext';

// import { Container } from './styles';

export default class Home extends Component {

  static contextType = UserContext;

  // componentDidMount(){
  //   !this.context.isLoggedIn && this.props.history.push('/login/')
  // }

  render() {

    const { isLoggedIn } = this.context;

    return (
      
      <h1>{ isLoggedIn ? 'Você está logado!' : 'Logue agora =)' }</h1>

    );
  }
}
