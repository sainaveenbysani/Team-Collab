import React,{useState, useContext} from 'react';
import './LoginUser.css'; 
import { Link } from 'react-router-dom';
import { useForm } from '../../Shared/hooks/form-hook';
import { AuthContext} from '../../Shared/context/auth-context';
import { useHttpClient} from '../../Shared/hooks/http-hook';

const LoginUser= props =>{
  const auth = useContext(AuthContext);
  const [enteredUsername, setUsername ] = useState('');
  const [enteredPassword, setPassword ] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  //const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, sendRequest } = useHttpClient();
  // const [formState, inputHandler, setFormData] = useForm(
  //   {
  //     userName: {
  //       value: '',
  //       isValid: false
  //     },
  //     password: {
  //       value: '',
  //       isValid: false
  //     }
  //   },
  //   false
  // );

  const userNameChangeHandler = event =>{
    setUsername(event.target.value);
  }
  const passwordChangeHandler = event =>{
    setPassword(event.target.value);
  }
  const LoginHandler= async event =>{
    event.preventDefault();
    try {
      //we do not care about the response data for this component
      await sendRequest (
        'http://localhost:3001/api/users/login', 
        'POST',
        JSON.stringify(   
          {
            'userName': enteredUsername,  
            //'email': formState.inputs.email.value,
            'password': enteredPassword
        }),
        {
          'Content-Type' : 'application/json'
        }
      );
      auth.login();
      }
      catch(err) {
        console.log(err);
      }
    // setLoginMessage(`User ${enteredUsername} Logged in Successfully!!!`);
    // setUsername('');
    // setPassword('');
  }
  return (
    <div>
      <br/>
      <form className='user-login' onSubmit={LoginHandler}>
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