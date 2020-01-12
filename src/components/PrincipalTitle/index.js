import React from 'react';

import { Title } from './styles';

const PrincipalTitle = (props) => {
  return (
    <Title>
      {props.children}
    </Title>
  );
}

export default PrincipalTitle;