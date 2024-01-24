// Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
import logo from '../../public/logoImg/logo.png'

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // try {
    //   const response = await fetch("login_api_url", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    navigate("/profile");
  };

  return (
    <div className="login-form-container">
    <div className='loginform'>
      <img src={logo} alt='' />
      <p>We've sent an email with your code to <br /> test@gmail.com</p>
      <form className="form">
        <label>
          {" "}
          Email Address:
          <input
            type='text'
            placeholder="test@gmail.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          {" "}
          Enter OTP:
          <input
            type='password'
            placeholder="Enter OTP"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type='button' onClick={handleLogin}>
          Continue
        </button>
        <div className="resendcode"><span>Didn’t received code?</span><a href="">Resend now</a></div>
      </form>
    </div>
    </div>
  );
};

export default Login;
