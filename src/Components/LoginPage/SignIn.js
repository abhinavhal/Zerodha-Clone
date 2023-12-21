import React from "react";
import TextField from '@mui/material/TextField';

import './SignIn.css'
import { SiZerodha } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const navigate = useNavigate('');
  
  const handleLogin = () =>{
    navigate('/dashboard');
  }

  return (
    <div className="login">

      <div className="login-icon">
      <SiZerodha/>
      </div>

      <h3>Login to Zerodha</h3>
      
      <div className="login-textfield">
        <TextField
          className="textfield"
          margin="normal"
          fullWidth
          label="User Id"
          autoComplete="email"
          autoFocus
        />
        <TextField
          className="textfield"
          margin="normal"
          fullWidth
          label="Password"
          autoComplete="email"
          autoFocus
        />
      </div>

      <div className="login-button">
        <button onClick={handleLogin}>Login</button>
      </div>

      <h5>Forgot UserId or Password</h5>
    </div>
  );
};

export default SignIn;
