import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { ContactContext } from '../../contexts/ContactContext';

import uuid from 'uuid';
import { toast } from 'react-toastify';

const Home = () => {

  const { user } = useContext(UserContext);
  const { contactList } = useContext(ContactContext);

  const [ name, setName ] = useState('');
  const [ email, setEmail] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ type, setType ] = useState('');


  return (
    <>
      <h1>{ user.name ? `Olá ${user.name}` : 'Logue agora =)' }</h1>

      <form action="#">

        <input 
          type="text" 
          name="Name"
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="email" 
          name="Email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="tel" 
          name="Phone"
          value={phone} 
          onChange={(e) => setPhone(e.target.value)}
        />

        <input 
          type="checkbox" 
          name="Type"
          value={type} 
          onChange={(e) => setType(e.target.value)}
        />

        <input type="submit" value="Adicionar"/>
      </form>

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