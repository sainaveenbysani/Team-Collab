import React, {useState} from 'react';
import './RegisterUser.css';

const RegisterUser= props =>{

  const [enteredFirstName, setFirstName ] = useState('');
  const [enteredLastName, setLastName ] = useState('');
  const [enteredEmail, setEmail] = useState('');
  const [enteredAddress, setAddress ] = useState('');
  const [enteredUsername, setUsername ] = useState('');
  const [enteredPassword, setPassword ] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');

  const addUserHandler = event =>{
    event.preventDefault();
    setRegisterMessage(`User ${enteredUsername} Registered Successfully!!!`);
    setFirstName('');
    setLastName('');
    setEmail('');
    setAddress('');
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
  const addressChangeHandler = event =>{
    setAddress(event.target.value);
  }
  const userNameChangeHandler = event =>{
    setUsername(event.target.value);
  }
  const passwordChangeHandler = event =>{
    setPassword(event.target.value);
  }

  return (
    <div>
      <form className='new-user' onSubmit={addUserHandler}>
      <h2>Register</h2>
      <label htmlFor="firstName"><strong>First Name:</strong></label>
      <input type="text" id="firstName" name="firstName" value={enteredFirstName} onChange={firstNameChangeHandler} required /><br />
      
      <label htmlFor="lastName"><strong>Last Name:</strong></label>
      <input type="text" id="lastName" name="lastName" value={enteredLastName} onChange={lastNameChangeHandler} required /><br />
      
      <label htmlFor="email"><strong>Email:</strong></label>
      <input type="email" id="email" name="email" value={enteredEmail} onChange={emailChangeHandler} required /><br />
      
      <label htmlFor="address"><strong>Address:</strong></label>
      <input type="text" id="address" name="address" value={enteredAddress} onChange={addressChangeHandler} required /><br />
      
      <label htmlFor="userName"><strong>Username:</strong></label>
      <input type="text" id="userName" name="userName" value={enteredUsername} onChange={userNameChangeHandler} required /><br />
      
      <label htmlFor="passWord"><strong>Password:</strong></label>
      <input type="password" id="passWord" name="passWord" value={enteredPassword} onChange={passwordChangeHandler} required /><br />
      <button type="submit">Register User</button>
    </form>
    {registerMessage&&
      <p><strong>{registerMessage}</strong></p>
    }
    </div> 
  );
}

export default RegisterUser;