import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { UserListContext } from '../../contexts/UserListContext';

const Home = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { userList } = useContext(UserListContext);

  console.log(userList);
  return (
    <>
      <h1>{ isLoggedIn ? 'Você está logado!' : 'Logue agora =)' }</h1>
      <ul>
        {userList.map(user =>{
          return(
            <li key={user.id}>{user.name}</li>
          )
        })}
      </ul>
    </>
  );
}

export default Home;


