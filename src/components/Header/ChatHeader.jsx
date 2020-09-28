import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DeleteIcon from '@material-ui/icons/Delete';
import './Header.css';

const ChatHeader = () => {
  return (
    <header className="chat-header">
      <NavLink to="/messages" className="back">
        <IconButton aria-label="go back">
          <ArrowBackIosIcon />
        </IconButton>
      </NavLink>
      <span>Manoj</span>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </header>
  );
};

export default ChatHeader;
