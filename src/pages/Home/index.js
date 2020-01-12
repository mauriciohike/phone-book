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

import { FaTimes } from 'react-icons/fa';

import { AddContact, PublicContactInput, CloseModal, CallLogin } from './styles';

const Home = () => {

  const { user } = useContext(UserContext);
  const { contactList, dispatch } = useContext(ContactContext);

  const [ name, setName ] = useState('');
  const [ email, setEmail] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ type, setType ] = useState('');

  const [ modal, setModal ] = useState(false);

  const [ contactsView, setContactsView ] = useState([]);

  const handleSubmit = (e) =>{

    e.preventDefault();

    if(name && email && phone){
      const phoneExist = contactList.find(contact => contact.phone === phone);
      const contactExist = contactList.find(contact => contact.name === name);
      
      if(!phoneExist && !contactExist){

        dispatch({
          type: 'ADD_CONTACT',
          contact: {id: uuid(), name, email, phone, type: type ? 'public' : 'private'}
        });

        toast.success('Cadastrado com sucesso!');
        toggleModal();
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

  const toggleModal = () =>{
    setModal(!modal)
  }

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
            {contactsView.length > 0 ?
              <h2>Aqui estão os seus <span>contatos</span>:</h2>
              :
              <h2>Adicione um <span>contato</span> agora:</h2>
            }
            

            <Button>
                <span onClick={toggleModal}>Novo</span>
            </Button>
          </AddContact>

        </>

        :
        <>
          <PrincipalTitle>Olá,</PrincipalTitle>

          <CallLogin>
            <h2>
              Quer realizar cadastros e visualizar contatos privados? 
              <Link to="/login"><span>Entre agora</span></Link>  ;)
            </h2>
          </CallLogin>

          { contactsView.length > 0 &&
            <AddContact>
              <h2>Aqui estão os <span>contatos públicos</span>:</h2>
            </AddContact>
          }
        </>
      }
      
      {modal &&
      <Modal>

        <CloseModal onClick={toggleModal}>
          <FaTimes/>
        </CloseModal>

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
                type="checkbox" name="Type"checked={type} onChange={(e) => setType    (e.target.checked)}
              />
            <span>O contato é público</span>
            </PublicContactInput>

            <Button>
              <input type="submit" value="Adicionar"/>
            </Button>
            
          </form>
      </Modal>}

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