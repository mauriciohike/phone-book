import React, { useContext, useState } from 'react';
import { UserListContext } from '../../contexts/UserListContext';

import uuid from 'uuid';
import { toast } from 'react-toastify';


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
    <form onSubmit={handleSubmit}>

      <input 
        type="text" 
        name="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        />

      <input 
        type="email"
        value={email}
        name="email" 
        onChange={(e) => setEmail(e.target.value)}
        />

      <input 
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      <input type="submit" value="Registrar"/>

    </form>
  );
}

export default Register;