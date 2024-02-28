import React, { useState } from "react";
import axios from "axios"; // Import Axios
import "./Login.css";
import logo from "../../../assets/Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";

function LoginTest() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLoginTouriste = ()=>{
    navigate("/touristePage");
  }
  const handleLogin = () => {
    if (userName.trim() === "" || password.trim() === "") {
      alert("Please enter userName and password");
      return;
    }

    // Make the login request using Axios
    axios.post('http://localhost:8080/api/auth/login', {
      userName,
      password
    })
    .then(response => {
      // Handle successful login
      console.log(response.data);
    })
    .catch(error => {
      // Handle login error
      console.error('Login failed:', error.response.data);
      alert('Login failed. Please check your credentials.');
    });
  };

  return (
    <div className="screen-1">
      <img src={logo} style={{ width: "280px" }} alt="Logo" />
      <div className="email">
        <label htmlFor="email">Email Address</label>
        <div className="sec-2">
          <ion-icon name="mail-outline"></ion-icon>
          <input
            type="email"
            name="email"
            placeholder="your email..."
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <div className="sec-2">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            className="pas"
            type="password"
            name="password"
            placeholder="password...."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ion-icon className="show-hide" name="eye-outline"></ion-icon>
        </div>
      </div>
      <button className="login" onClick={handleLoginTouriste}>Login </button>
      <div className="footeer">
        <span>Signup</span>
        <span>Forgot Password?</span>
      </div>
    </div>
  );
}

export default LoginTest;
