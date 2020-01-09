import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { UserListContext } from '../../contexts/UserListContext';

const Home = () => {
  const { user } = useContext(UserContext);
  const { userList } = useContext(UserListContext);

  console.log(userList);
  return (
    <>
      <h1>{ user.name ? `Olá ${user.name}` : 'Logue agora =)' }</h1>
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


