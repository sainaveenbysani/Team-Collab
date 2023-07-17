import React,{useState} from 'react';
import './LoginUser.css'; 
import { Link } from 'react-router-dom';

const LoginUser= props =>{
  const [enteredUsername, setUsername ] = useState('');
  const [enteredPassword, setPassword ] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const userNameChangeHandler = event =>{
    setUsername(event.target.value);
  }
  const passwordChangeHandler = event =>{
    setPassword(event.target.value);
  }
  const LoginMessage= event =>{
    event.preventDefault();
    setLoginMessage(`User ${enteredUsername} Logged in Successfully!!!`);
    setUsername('');
    setPassword('');
  }
  return (
    <div>
      <form className='user-login' onSubmit={LoginMessage}>
      <h2>Login</h2>      
      <label htmlFor="userName"><strong>Username:</strong></label>
      <input type="text" id="userName" name="userName" value={enteredUsername} onChange={userNameChangeHandler} required /><br />
      <label htmlFor="passWord"><strong>Password:</strong></label>
      <input type="password" id="passWord" name="passWord" value={enteredPassword} onChange={passwordChangeHandler} required /><br />
      <button type="submit">Login</button>
      <p>Please login or <Link to="/register">register</Link> if you don't have an account.</p>
    </form>{loginMessage&&
      <p><strong>{loginMessage}</strong></p>
    }
    </div>
    
  );
};


export default LoginUser;