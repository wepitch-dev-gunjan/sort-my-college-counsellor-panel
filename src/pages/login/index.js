import React, { useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import './style.scss';
import Logo from '../../assets/logo.svg';
import { TextField, InputAdornment, IconButton } from '@mui/material';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    window.location.href = 'http://localhost:9000/counsellor/auth/google';
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className='Login-container'>
        <div className="img">

          <img src={Logo} alt="sortmycollege" />
        </div>
        <div className="login-inputs">
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField
            id="standard-password-input"
            label="Password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <p>Forgot your password?</p>
          <button className='Google-login-button' onClick={handleGoogleLogin} disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>
        <div>
          <p>Or</p>
        </div>
        <button className='Google-login-button' onClick={handleGoogleLogin} disabled={isLoading}>
          <FaGoogle className='Google-icon' />
          {isLoading ? 'Logging in...' : 'Login with Google'}
        </button>
      </div>
    </div>
  );
};

export default Login;
