import React from 'react';
import { IconButton } from '@material-ui/core';
import './Header.css';

import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
  return (
    <header className="header">
      <IconButton aria-label="profile">
        <PersonIcon />
      </IconButton>
      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="Logo"
        className="header__logo"
      />
      <IconButton aria-label="chats">
        <ForumIcon />
      </IconButton>
    </header>
  );
};

export default Header;
