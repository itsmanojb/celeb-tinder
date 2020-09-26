import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Header.css';

const AliasHeader = () => {
  return (
    <header className="chat-header">
      <NavLink to="/profile" className="back">
        <IconButton aria-label="go back">
          {/* <ArrowBackIcon /> */}
          <ArrowBackIosIcon />
        </IconButton>
      </NavLink>
    </header>
  );
};

export default AliasHeader;
