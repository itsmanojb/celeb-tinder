import React from 'react';
import logo from './white-logo.png';
import { NavLink } from 'react-router-dom';

const Signin = () => {
  return (
    <div className="Login">
      <div className="top">
        <div className="logo">
          <span className="flame">
            <img src={logo} alt="logo" />
          </span>
          <span>tinder</span>
        </div>
        <p>Swipe like Celebrities</p>
      </div>
      <div>
        <NavLink className="login-btn" to="/swipe">
          Create Account
        </NavLink>
        <NavLink className="login-btn outlined" to="/swipe">
          Sign in
        </NavLink>
      </div>
    </div>
  );
};

export default Signin;
