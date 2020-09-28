import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import style from './Messages.module.css';

const ComposeMessage = () => {
  return (
    <div className={style.msgbox}>
      <div className={style.input}>
        <input type="text" disabled placeholder="Reply has been turned off!" />
      </div>
      <div className={style.send_btn}>
        <IconButton aria-label="send message">
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ComposeMessage;
