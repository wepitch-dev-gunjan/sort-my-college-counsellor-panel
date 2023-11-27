import React, { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import "./style.scss";
import Logo from "../../assets/logo.svg";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { backend_url } from "../../config";
import axios from "axios";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // const handleGoogleLogin = () => {
  //   setIsLoading(true);
  //   window.location.href = `${backend_url}/auth/google`;
  // };
  const handleGoogleLogin = async () => {
    setIsLoading(true);

    try {
      // Make a request to your backend with Axios
      const response = await axios.get(`${backend_url}/auth/google`, { withCredentials: true });

      // Check if the response indicates successful login
      if (response.data.success) {
        // Redirect to a success page or home page
        navigate("/dashboard");
      } else {
        // Handle login failure
        // You might want to show an error message or perform other actions
      }
    } catch (error) {
      // Handle errors
      console.error("Error during Google login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="Login-container">
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
          <p className="forgot">
            <Link to="/password-reset"> Forgot your password?</Link>
          </p>

          <div className="buttons">
            <button
              className="Google-login-button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
          <button
            className="Google-login-button"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <FaGoogle className="Google-icon" />
            {isLoading ? "Logging in..." : "Login with Google"}
          </button>
        </div>
        <p>Or</p>
        <hr />
        <div className="signup">
          <p>
            Don't have a account?
            <Link to="/signup"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
