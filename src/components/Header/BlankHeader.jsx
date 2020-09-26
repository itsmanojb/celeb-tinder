import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Header.css';

const BlankHeader = ({ title }) => {
  return (
    <header className={`chat-header ${title ? 'has-title' : ''}`}>
      <NavLink to="/profile" className="back">
        <IconButton aria-label="go back">
          {/* <ArrowBackIcon /> */}
          <ArrowBackIosIcon />
        </IconButton>
      </NavLink>
      {title && <span>{title}</span>}
    </header>
  );
};

export default BlankHeader;
