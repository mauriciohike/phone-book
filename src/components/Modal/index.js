import React from 'react';

import { Shadow, ModalContent } from './styles';

const Modal = (props) => {
  return (
    <Shadow>
      <ModalContent>
        {props.children}
      </ModalContent>
    </Shadow>
  );
}

export default Modal;