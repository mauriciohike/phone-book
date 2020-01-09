import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';

import { Title } from './styles';


const Login = ({ history }) => {

  const { user, dispatch } = useContext(UserContext)

  const authUser = () =>{
    dispatch({
      type: 'SET_USER',
      user: {
        name: 'Mauricio'
      }
    })
  }

  useEffect(() =>{
    setTimeout(() =>{
      user.name && history.push('/')
    }, 1500)
  });

  return (
    <Title onClick={authUser}>Login</Title>
  );
}

export default Login;
