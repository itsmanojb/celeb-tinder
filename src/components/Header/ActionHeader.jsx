import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';

const ActionHeader = ({ title, onDone }) => {
  function doAction() {
    onDone();
  }

  return (
    <header className="chat-header has-action">
      <span>{title}</span>
      <Button className="done-btn" onClick={doAction}>
        Done
      </Button>
    </header>
  );
};

export default ActionHeader;
