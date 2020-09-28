import React from 'react';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import { NavLink } from 'react-router-dom';

const Signin = () => {
  return (
    <div className="Login">
      <div className="top">
        <div className="logo">
          <WhatshotRoundedIcon />
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
