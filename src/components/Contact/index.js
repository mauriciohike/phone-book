import React, { useContext } from 'react';
import { ContactContext } from '../../contexts/ContactContext';
import { FaTimes } from 'react-icons/fa';

import { Item, DeleteContact } from './styles';

const Contact = (props) => {

  const { dispatch } = useContext(ContactContext);

  const deleteContact = (id) =>{
    dispatch({
      type: 'REMOVE_CONTACT', id
    });
  };

  const {id, name, email, phone} = props;

  return (
    <Item key={id}>
        <DeleteContact onClick={() => { deleteContact(id) }}>
         <FaTimes/>
        </DeleteContact>
          
        <p>{name}</p>
        <p className="colored">{email}</p>
        <p>{phone}</p>
    </Item>
  );
}

export default Contact;