import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import { useHistory } from 'react-router-dom';

const ActionHeader = ({ title }) => {
  const history = useHistory();

  function doAction() {
    history.goBack();
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
