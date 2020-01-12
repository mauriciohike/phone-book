import React from 'react';

import { Input } from './styles';

const InputGroup = (props) => {
  return (
    <Input>
      {props.children}
    </Input>
  );
}

export default InputGroup;