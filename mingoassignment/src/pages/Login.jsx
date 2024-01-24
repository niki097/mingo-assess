// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./loginapi";
import './style.css';
import logo from '../../public/logoImg/logo.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isUserLoggedIn, enableLogin , enableLogout } = useAuth();
  

  
  const  showSucessToast = (msg) => {
    // Display a success toast
    toast.success(msg, {
        position: 'top-right',
      });
  };

  const showFailToast = (msg) => {
     toast.error(msg, {
        position: "top-right"
     })
  }

  const handleLogin = async () => {
    try {
      let data = await loginUser(email, password);
      data = data?.data ? data.data : null;
      if(data.token){
        showSucessToast(`Hey ${data.user.name} you are login sucessfully`);
        console.log("Login Successful:", data);
        // Save token to local storage
        localStorage.setItem("accessToken", data.token);
        localStorage.setItem('user', JSON.stringify(data.user))
        enableLogin();
        navigate("/profile");
      }else{
        showFailToast('Something went wrong')
      }
    } catch (error) {
      console.error("Login Error:", error.message);
      showFailToast(error.message)
    }
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
      <ToastContainer/>
    </div>
  );
};

export default Login;
