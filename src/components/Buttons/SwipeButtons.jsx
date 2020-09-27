import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GradeIcon from '@material-ui/icons/Grade';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import './Swipe-buttons.css';

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <div className="container">
        <IconButton className="btn btn__undo">
          <ReplayIcon />
        </IconButton>
        <IconButton className="btn btn__no">
          <CloseIcon />
        </IconButton>
        <IconButton className="btn btn__star">
          <GradeIcon />
        </IconButton>
        <IconButton className="btn btn__yes">
          <FavoriteIcon />
        </IconButton>
        <IconButton className="btn btn__boost">
          <FlashOnIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SwipeButtons;
