import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import "./Header.css";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/profile" activeClassName="active">
        <IconButton aria-label="profile">
          <PersonIcon />
        </IconButton>
      </NavLink>
      <NavLink to="/swipe" activeClassName="active">
        <img src="/logo192.png" alt="Logo" className="header__logo" />
      </NavLink>
      <NavLink to="/messages" activeClassName="active">
        <IconButton aria-label="chats">
          <ForumIcon />
        </IconButton>
      </NavLink>
    </header>
  );
};

export default Header;
