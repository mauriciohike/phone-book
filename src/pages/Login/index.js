import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { toast } from 'react-toastify';
import { UserListContext } from '../../contexts/UserListContext';


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
    <form onSubmit={handleSubmit}>
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
      <input type="submit" value="Login"/>
    </form>
  );
}

export default Login;
