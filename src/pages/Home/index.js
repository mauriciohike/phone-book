import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { ContactContext } from '../../contexts/ContactContext';

import uuid from 'uuid';
import { toast } from 'react-toastify';

const Home = () => {

  const { user } = useContext(UserContext);
  const { contactList, dispatch } = useContext(ContactContext);

  const [ name, setName ] = useState('');
  const [ email, setEmail] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ type, setType ] = useState('');

  const [ contactsView, setContactsView ] = useState('');

  const handleSubmit = (e) =>{

    e.preventDefault();

    if(name && email && phone){
      const contactExist = contactList.find(contact => contact.phone === phone);

      if(!contactExist){

        dispatch({
          type: 'ADD_CONTACT',
          contact: {id: uuid(), name, email, phone, type: type ? 'public' : 'private'}
        });

        toast.success('Cadastrado com sucesso!');
        resetForm();
      }else{
        toast.error('Contato já cadastrado');
        resetForm();
      }
    }else{
      toast.warn('Preencha todas as infos!');
    }
  };

  const resetForm = () =>{
    setName(''); setEmail(''); setPhone(''); setType('');
  };

  const deleteContact = (id) =>{
    dispatch({
      type: 'REMOVE_CONTACT', id
    });
  };

  useEffect(() =>{
    if(user.name){
      setContactsView(contactList);
    }else{
      setContactsView(contactList.filter(contact => contact.type === 'public'));
    }
  }, [user.name, contactList]);

  return (
    <>
      <h1>{ user.name ? `Olá ${user.name}` : 'Logue agora =)' }</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" name="Name"value={name} onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email" name="Email"value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="tel" name="Phone"value={phone} onChange={(e) => setPhone(e.target.value)}
        />
        <input 
          type="checkbox" name="Type"checked={type} onChange={(e) => setType(e.target.checked)}
        />
        <input type="submit" value="Adicionar"/>
      </form>

      <ul>
        {contactsView && contactsView.map(contact =>{
          return(
            <li key={contact.id} onClick={() => { deleteContact(contact.id) }}>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;