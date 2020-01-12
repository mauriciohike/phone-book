import React from 'react';

import { Container } from './styles';

const ContactsContainer = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

export default ContactsContainer;