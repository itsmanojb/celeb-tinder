import React from 'react';
import Header from '../components/Header/Header';
import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import EditIcon from '@material-ui/icons/Edit';
import style from '../components/Profile/Profile.module.css';

const Profile = () => {
  return (
    <div className="App no-footer scroll">
      <Header />
      <div className={style.page}>
        <div className={style.top}>
          <div className={style.avatar}>
            <img src="http://placegoat.com/300" alt="" />
          </div>
          <div className={style.name}>
            <h3>Lorem Ipsum</h3>
            <p>tagline will go here</p>
          </div>
          <div className={style.profile__btns}>
            <div className={style.btn}>
              <IconButton aria-label="settings">
                <SettingsIcon />
              </IconButton>
              <span>Settings</span>
            </div>
            <div className={style.btn}>
              <IconButton aria-label="add photo" className={style.special_btn}>
                <AddAPhotoIcon />
              </IconButton>
              <span>Add Photo</span>
            </div>
            <div className={style.btn}>
              <IconButton aria-label="edit details">
                <EditIcon />
              </IconButton>
              <span>Edit Info</span>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <h3>Celebrity Tinder</h3>
          <p>
            Pick your favorite celebrity as your tinder alias. Rest is same as
            tinder.
          </p>
          <button>Pick Alias</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
