import React, { Component } from 'react';
import { UserContext } from '../../contexts/UserContext';

// import { Container } from './styles';

export default class Home extends Component {

  static contextType = UserContext;

  componentDidMount(){
    !this.context.isLoggedIn && this.props.history.push('/login/')
  }

  render() {

    return (
      
      <h1>Home</h1>

    );
  }
}
