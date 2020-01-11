import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { UserListContext } from '../../contexts/UserListContext';

import uuid from 'uuid';
import { toast } from 'react-toastify';

import ContainerOutside from '../../layouts/ContainerOutside';
import InputGroup from '../../components/InputGroup';
import PrincipalTitle from '../../components/PrincipalTitle';
import Button from '../../components/Button';

import { CallToPage } from './styles';


const Register = ({history}) => {

  const { userList, dispatch } = useContext(UserListContext);

  const [ name, setName ] = useState('');
  const [ email, setEmail] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) =>{

    e.preventDefault();

    if(name && email && password){

      const userExist = userList.find(user => user.email === email);

      if(!userExist){
        dispatch({
          type: 'ADD_USER',
          user: {id: uuid(), name, email, password}
        });
        toast.success('Cadastrado com sucesso!');

        resetForm();
        redirect();

      }else{
        toast.error('E-mail já cadastrado');
        resetForm();
      }
    }else{
      toast.warn('Preencha todas as infos!');
    }
  }

  const resetForm = () =>{
    setName('');
    setEmail('');
    setPassword('');
  }

  const redirect = () =>{
    setTimeout(() =>{
      history.push('/login')
    }, 1500)
  }

  return (
    <ContainerOutside>

      <PrincipalTitle>
        Organizar os <span>contatos</span> nunca foi tão fácil!
      </PrincipalTitle>

      <form onSubmit={handleSubmit}>

      <InputGroup>
        <label for="name">
            Nome:
          </label>
        <input 
          type="text" 
          name="name" 
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>

      <InputGroup>
        <label for="email">
            E-mail:
        </label>
        <input 
          type="email"
          value={email}
          name="email"
          id="email" 
          onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>

      <InputGroup>
        <label for="email">
          Senha:
        </label>
        <input 
          type="password"
          name="password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          />
      </InputGroup>

        <Button>
          <input type="submit" value="Registrar"/>
        </Button>
        
      </form>
      <CallToPage>
            Já possui cadastro?
            <Link to="/login">
              <span> entre aqui!</span>
            </Link>
          </CallToPage>
    </ContainerOutside>
  );
}

export default Register;