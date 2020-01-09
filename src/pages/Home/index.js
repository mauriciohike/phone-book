import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>{ user.name ? `Olá ${user.name}` : 'Logue agora =)' }</h1>
    </>
  );
}

export default Home;


  