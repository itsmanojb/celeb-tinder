import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import EditIcon from '@material-ui/icons/Edit';
import style from './Profile.module.css';

const MyProfile = () => {
  const history = useHistory();
  const [alias, setAlias] = useState(() => {
    const prof = localStorage.getItem('C_TIND_ALIAS');
    return JSON.parse(prof) || null;
  });

  useEffect(() => {
    const prof = localStorage.getItem('C_TIND_ALIAS');
    setAlias(prof ? JSON.parse(prof) : null);
  }, []);

  function gotoSettings() {
    history.push('/settings');
    // if (alias) {
    // }
  }

  function editProfile() {
    if (alias) {
      history.push('/edit-info');
    }
  }

  function setupAlias() {
    if (!alias) {
      history.push('/alias');
    }
  }

  return (
    <div className={style.page}>
      <div className={style.top}>
        <div className={style.avatar}>
          {alias && <img src={alias.photo} alt=".." />}
        </div>
        <div className={style.name}>
          <h3>{alias ? alias.name : ''}</h3>
          <p>
            {alias
              ? alias.orginal_name
                ? alias.orginal_name
                : 'Celebrity'
              : 'pick your alias'}
          </p>
        </div>
        <div className={style.profile__btns}>
          <div className={style.btn}>
            <IconButton aria-label="settings" onClick={gotoSettings}>
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
            <IconButton aria-label="edit details" onClick={editProfile}>
              <EditIcon />
            </IconButton>
            <span>Edit Info</span>
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <h3>Celebrity Tinder</h3>
        {!alias ? (
          <>
            <p>
              Pick your favorite celebrity as your tinder alias. Alias can be
              set only once. Rest is same as tinder.
            </p>
            <button onClick={setupAlias}>Pick Alias</button>
          </>
        ) : (
          <>
            <p>
              You've already picked your alias, which you cannot change. However
              you can change photo or edit your profile.
            </p>
            <button disabled>Alias Picked</button>
          </>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
