import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Home = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <h1>{ isLoggedIn ? 'Você está logado!' : 'Logue agora =)' }</h1>
  );
}

export default Home;


