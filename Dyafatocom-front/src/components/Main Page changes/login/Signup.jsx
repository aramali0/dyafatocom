import React from "react";
import "./Login.css";
import logo from "../../../assets/Assets/Images/logo.png";
function Login() {
  return (
    <div className="screen-1">
      <img src={logo} style={{ width: "280px" }} />
      <div className="email">
        <label htmlFor="email">Email Address</label>
        <div className="sec-2">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" name="email" placeholder="Username@gmail.com" />
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
            placeholder="············"
          />
          <ion-icon className="show-hide" name="eye-outline"></ion-icon>
        </div>
      </div>
      <button className="login">Login </button>
      <div className="footeer">
        <span>Signup</span>
        <span>Forgot Password?</span>
      </div>
    </div>
  );
}

export default Login;
