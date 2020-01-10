import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { ContactContext } from '../../contexts/ContactContext';

const Home = () => {
  const { user } = useContext(UserContext);
  const { contactList } = useContext(ContactContext);
  return (
    <>
      <h1>{ user.name ? `Olá ${user.name}` : 'Logue agora =)' }</h1>
      <ul>
        {contactList.map(contact =>{
          return(
            <>
              <li>{contact.name}</li>
              <li>{contact.email}</li>
              <li>{contact.phone}</li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Home;