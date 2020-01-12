import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import { toast } from 'react-toastify';
import { UserListContext } from '../../contexts/UserListContext';

import ContainerOutside from '../../layouts/ContainerOutside';
import InputGroup from '../../components/InputGroup';
import PrincipalTitle from '../../components/PrincipalTitle';
import Button from '../../components/Button';

import { CallToPage } from './styles';



const Login = ({ history }) => {

  const { dispatch } = useContext(UserContext);
  const { userList } = useContext(UserListContext);

  const [ email, setEmail] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) =>{

    e.preventDefault();

    if(email && password){

      const userExist = userList.find(user =>{
        return user.email === email && user.password === password;
      });

      if(userExist){
        dispatch({
          type: 'SET_USER',
          user: userExist
        });
        redirect('/', 0);
      }else{
        toast.error('Não encontrado!');
      }

    }else{
      toast.warn('Preencha todas as infos!');
    }
  
  }

  const redirect = (path, time) =>{
    setTimeout(() =>{
      history.push(path)
    }, time)
  }

  return (
    <ContainerOutside>

      <PrincipalTitle>Acesse agora a sua <span>agenda telefônica</span>:</PrincipalTitle>

      <form onSubmit={handleSubmit}>

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
          <label for="password">
            Senha:
          </label>
          <input 
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </InputGroup>

          <Button>
            <input type="submit" value="Entrar"/>
          </Button>

          

      </form>
      <CallToPage>
            Não tem cadastro ainda?
            <Link to="/register">
              <span> clique aqui!</span>
            </Link>
          </CallToPage>
    </ContainerOutside>
  );
}

export default Login;
