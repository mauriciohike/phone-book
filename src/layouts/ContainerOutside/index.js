import React from 'react';
import Illustration from '../../components/Illustration';
import { Container } from './styles';

const ContainerOutside = (props) => {
  return (
    <Container>
      <div className="row">
        {props.children}
      </div>

      <div className="row">
        <Illustration/>
      </div>
    </Container>
  );
}

export default ContainerOutside;