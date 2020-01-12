import React, { useContext } from 'react';
import { ContactContext } from '../../contexts/ContactContext';

import { Item } from './styles';

const Contact = (props) => {

  const { dispatch } = useContext(ContactContext);

  const deleteContact = (id) =>{
    dispatch({
      type: 'REMOVE_CONTACT', id
    });
  };

  const {id, name, email, phone} = props;

  return (
    <Item key={id} onClick={() => { deleteContact(id) }}>
        <p>{name}</p>
        <p className="colored">{email}</p>
        <p>{phone}</p>
    </Item>
  );
}

export default Contact;