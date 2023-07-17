import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './RegisterUser.css';
import { useHttpClient } from '../../Shared/hooks/http-hook';

const RegisterUser= props =>{
  const { isLoading, sendRequest } = useHttpClient();

  const [enteredFirstName, setFirstName ] = useState('');
  const [enteredLastName, setLastName ] = useState('');
  const [enteredEmail, setEmail] = useState('');
  const [enteredUsername, setUsername ] = useState('');
  const [enteredPassword, setPassword ] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');

  const addUserHandler = async event =>{
    event.preventDefault();
    try {
      //we do not care about the response data for this component
      await sendRequest (
        'http://localhost:3001/api/users/signup', 
        'POST',
        JSON.stringify(   
          {
            'firstName':enteredFirstName,
            'lastName':enteredLastName,
            'email': enteredEmail,
            'userName': enteredUsername,  
            'password': enteredPassword
        }),
        {
          'Content-Type' : 'application/json'
        }
      );
      console.log('User registration details done.')
     // auth.login();
      }
      catch(err) {
        console.log(err);
      }
    setRegisterMessage(`User ${enteredUsername} Registered Successfully!!!`);
    setFirstName('');
    setLastName('');
    setEmail('');
    setUsername('');
    setPassword('');
  };

  const firstNameChangeHandler = event =>{
    setFirstName(event.target.value);
  }
  const lastNameChangeHandler = event =>{
    setLastName(event.target.value);
  }
  const emailChangeHandler = event =>{
    setEmail(event.target.value);
  }
  const userNameChangeHandler = event =>{
    setUsername(event.target.value);
  }
  const passwordChangeHandler = event =>{
    setPassword(event.target.value);
  }

  return (
    <div>
      <br/>
      <form className='new-user' onSubmit={addUserHandler}>
      <h2>Register</h2>
      <label htmlFor="firstName"><strong>First Name:</strong></label>
      <input type="text" id="firstName" name="firstName" value={enteredFirstName} onChange={firstNameChangeHandler} required /><br />
      
      <label htmlFor="lastName"><strong>Last Name:</strong></label>
      <input type="text" id="lastName" name="lastName" value={enteredLastName} onChange={lastNameChangeHandler} required /><br />
      
      <label htmlFor="email"><strong>Email:</strong></label>
      <input type="email" id="email" name="email" value={enteredEmail} onChange={emailChangeHandler} required /><br />
      
      <label htmlFor="userName"><strong>Username:</strong></label>
      <input type="text" id="userName" name="userName" value={enteredUsername} onChange={userNameChangeHandler} required /><br />
      
      <label htmlFor="passWord"><strong>Password:</strong></label>
      <input type="password" id="passWord" name="passWord" value={enteredPassword} onChange={passwordChangeHandler} required /><br />
      <button type="submit">Register User</button>
      <p>Please Register or <Link to="/login">Login</Link> if you have an account.</p>
      {registerMessage&&
      <p><strong>{registerMessage}</strong></p>}
    </form>
    </div> 
  );
}

export default RegisterUser;