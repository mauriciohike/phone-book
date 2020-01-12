import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import { ContactContext } from '../../contexts/ContactContext';
 
import uuid from 'uuid';
import { toast } from 'react-toastify';

import ContainerInside from '../../layouts/ContainerInside';

import PrincipalTitle from '../../components/PrincipalTitle';
import Button from '../../components/Button';
import ContactsContainer from '../../components/ContactsContainer';
import Contact from '../../components/Contact';
import Modal from '../../components/Modal';
import InputGroup from '../../components/InputGroup';

import { AddContact, PublicContactInput } from './styles';

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

  useEffect(() =>{
    if(user.name){
      setContactsView(contactList);
    }else{
      setContactsView(contactList.filter(contact => contact.type === 'public'));
    }
  }, [user.name, contactList]);

  return (
    <ContainerInside>
      {user.name ?

        <>
          <PrincipalTitle> Olá <span>{user.name}</span>,</PrincipalTitle>

            <AddContact>
            <h2>Aqui estão os seus <span>contatos</span>:</h2>

            <Button>
                <span>Novo</span>
            </Button>
          </AddContact>

        </>


        :
        <PrincipalTitle>Olá,</PrincipalTitle>
      }
      
      <Modal>
        <form onSubmit={handleSubmit}>
            <InputGroup>
              <label for="name">
                Nome:
              </label>
              <input 
                type="text" id="name" name="Name"value={name} onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <label for="email">
                E-mail:
              </label>
              <input 
                type="email" id="email" name="Email"value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <label for="phone">
                Celular:
              </label>
              <input 
                type="tel" id="phone" name="Phone"value={phone} onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>

<PublicContactInput>
            <input 
              type="checkbox" name="Type"checked={type} onChange={(e) => setType(e.target.checked)}
            />
            <span>O contato é público</span>
            </PublicContactInput>

            <Button>
              <input type="submit" value="Adicionar"/>
            </Button>
            
          </form>
      </Modal>

      <ContactsContainer>
        {contactsView && contactsView.map(contact =>{
          return(

            <Contact 
              id={contact.id} 
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              />
          );
        })}
      </ContactsContainer>
    </ContainerInside>
  );
}

export default Home;