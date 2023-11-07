import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    window.location.href = 'http://localhost:9000/counsellor/auth/google';
  };

  return (
    <div className='Login-container'>
      <h2>Welcome to our App</h2>
      <button className='Google-login-button' onClick={handleGoogleLogin} disabled={isLoading}>
        <FaGoogle className='Google-icon' />
        {isLoading ? 'Logging in...' : 'Login with Google'}
      </button>
    </div>
  );
};

export default Login;
