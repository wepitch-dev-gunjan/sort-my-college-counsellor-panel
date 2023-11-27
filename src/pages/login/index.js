import React, { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import "./style.scss";
import Logo from "../../assets/logo.svg";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { backend_url } from "../../config";
import { DatePicker } from "@mui/x-date-pickers";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [signUpEnable, setSignUpEnable] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [dobError, setDobError] = useState(null);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    window.location.href = `${backend_url}/auth/google`;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateLoginFields = () => {
    if (!email || !password) {
      alert("Email and password are required.");
      return false;
    }
    return true;
  };

  const validateSignUpFields = () => {
    let isValid = true;

    if (!name) {
      setNameError("Name is required.");
      isValid = false;
    } else {
      setNameError(null);
    }

    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      console.log("I m in");
      setEmailError("Invalid email format.");
      isValid = false;
    } else {
      setEmailError(null);
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else {
      setPasswordError(null);
    }

    if (!dob) {
      setDobError("Date of Birth is required.");
      isValid = false;
    } else {
      setDobError(null);
    }

    return isValid;
  };

  const handleLogin = () => {
    if (validateLoginFields()) {
      setIsLoading(true);
    }
  };

  const handleSignUp = () => {
    if (validateSignUpFields()) {
      setIsLoading(true);
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      console.log("I m in");
      setEmailError("Invalid email format.");
    } else {
      setEmailError(null);
    }
  };

  return (
    <div className="container">
      <div className="Login-container">
        <div className="img">
          <img src={Logo} alt="sortmycollege" />
        </div>
        <div className="login-inputs">
          {signUpEnable && (
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError(null); // Clear the error when the value changes
              }}
              onBlur={() => !name && setNameError("Name is required.")}
              error={!!nameError}
              helperText={nameError}
            />
          )}
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(null); // Clear the error when the value changes
            }}
            onBlur={handleEmailBlur}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            variant="outlined"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(null); // Clear the error when the value changes
            }}
            onBlur={() =>
              !password && setPasswordError("Password is required.")
            }
            error={!!passwordError}
            helperText={passwordError}
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
          {signUpEnable && (
            <DatePicker
              label="Date of Birth"
              value={dob}
              onChange={(date) => setDob(date)}
              onBlur={() => !dob && setDobError("Date of Birth is required.")}
              error={!!dobError}
              helperText={dobError}
            />
          )}
          {signUpEnable && (
            <div className="buttons">
              <button
                className="Google-login-button"
                onClick={handleSignUp}
                disabled={isLoading}
              >
                {isLoading ? "Signing up..." : "Sign Up"}
              </button>
            </div>
          )}
          {signUpEnable && (
            <div className="buttons">
              <button
                className="Google-login-button"
                onClick={() => setSignUpEnable(false)}
                disabled={isLoading}
              >
                Cancel
              </button>
            </div>
          )}
          {!signUpEnable && (
            <p className="forgot">
              <Link to="/password-reset"> Forgot your password?</Link>
            </p>
          )}
          {!signUpEnable && (
            <div className="buttons">
              <button
                className="Google-login-button"
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          )}

          {!signUpEnable && (
            <button
              className="Google-login-button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <FaGoogle className="Google-icon" />
              {isLoading ? "Logging in..." : "Login with Google"}
            </button>
          )}
          {!signUpEnable && (
            <>
              <p>Or</p>
              <hr />
            </>
          )}
        </div>
        {!signUpEnable && (
          <div>
            <p>
              Don't have an account?
              <div className="signup" onClick={() => setSignUpEnable(true)}>
                Sign Up
              </div>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
