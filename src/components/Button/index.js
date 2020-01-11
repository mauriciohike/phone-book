import React from 'react';

import { Wrapper } from './styles';

const Button = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

export default Button