import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import GradeIcon from '@material-ui/icons/Grade';
import style from './Settings.module.css';

import { auth, firestore } from '../../utilities/firebase';
import useLocalStorage from '../../utilities/useLSHook';
import Config from '../../utilities/config';
import ActionHeader from '../Header/ActionHeader';

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles({
  root: {
    color: '#ff655b',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  // valueLabel: {
  //   left: 'calc(-50% + 12px)',
  //   top: -22,
  //   '& *': {
  //     background: 'transparent',
  //     color: '#000',
  //   },
  // },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

const AccountSettings = () => {
  const history = useHistory();
  const [user] = useLocalStorage('CTIND_USER');

  const settings = user.settings ? user.settings : Config.default_settings;
  const [maxDistance, setMaxDistance] = useState(settings.maxDistance);
  const [ageRange, setAgeRange] = useState(settings.ageRange);
  const [global, setGlobal] = useState(settings.global);
  const [lookingFor, setLookingFor] = useState(settings.lookingFor);

  const [savingData, setSavingData] = useState(false);

  const handleDistanceChange = (event, newValue) => {
    setMaxDistance(newValue);
  };

  const handleAgeChange = (event, newValue) => {
    setAgeRange(newValue);
  };

  function signOut() {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      localStorage.removeItem('CTIND_USER');
      auth.signOut();
    }
  }

  function onProfileSave() {
    const newSettings = {
      maxDistance,
      ageRange,
      global,
      lookingFor: +lookingFor,
    };
    if (JSON.stringify(newSettings) !== JSON.stringify(settings)) {
      setSavingData(true);
      const usersRef = firestore.doc(`users/${user.uid}`);
      usersRef.get().then(async (doc) => {
        let data = doc.data();
        localStorage.setItem(
          'CTIND_USER',
          JSON.stringify({ ...data, settings: newSettings })
        );
        await usersRef.set({ settings: newSettings }, { merge: true });
        setSavingData(false);
        history.goBack();
      });
    } else {
      history.goBack();
    }
  }

  return (
    <>
      <ActionHeader title="Settings" onDone={onProfileSave} />
      <div className={`${style.edit_page} ${savingData ? style.inactive : ''}`}>
        <div className={style.promo_card}>
          <span>
            tinder <strong style={{ color: 'gold' }}>Gold</strong>{' '}
          </span>
          <small>Unlock most exclusive features</small>{' '}
        </div>
        <div className={style.promo_card}>
          <span>
            tinder{' '}
            <strong
              style={{
                color: 'red',
                fontSize: '40px',
                position: 'absolute',
                top: '-16px',
                left: '50%',
                marginLeft: '25px',
              }}
            >
              +{' '}
            </strong>{' '}
          </span>
          <small>Unlimited Likes and more!</small>{' '}
        </div>
        <div className={style.card_row}>
          <div className={style.stats}>
            <div className={style.stats_icon}>
              <FlashOnIcon style={{ color: 'purple' }} />
            </div>
            <div className={style.stats_text}>
              <span>0 remaining</span>
              <span style={{ color: 'purple' }}>No boosts available</span>
            </div>
          </div>
          <div className={style.stats}>
            <div className={style.stats_icon}>
              <GradeIcon style={{ color: '#00a1ff' }} />
            </div>
            <div className={style.stats_text}>
              <span>0 remaining</span>
              <span style={{ color: '#00a1ff' }}>No super likes available</span>
            </div>
          </div>
        </div>
        <div className={style.item_label}>Account Settings</div>
        <div className={style.list_item}>
          <div>Your Name</div>
          <div className={style.item_value}>{user.displayName}</div>
        </div>
        <div className={style.list_item}>
          <div>Email</div>
          <div className={style.item_value}>{user.email}</div>
        </div>
        <div className={style.list_item}>
          <div>Phone</div>
          <div>N/A</div>
        </div>
        <div className={style.help_text}>
          No mobile or email verification needed.
        </div>
        <div className={style.item_label}>Discovery Settings</div>
        <div className={style.list_item}>
          <div>Location</div>
          <div className={style.item_value}>Current location</div>
        </div>
        <div className={style.list_item}>
          <div>Global</div>
          <div className="ios-toggle">
            <label htmlFor="toggle">
              <input
                type="checkbox"
                id="toggle"
                onChange={(e) => setGlobal(e.target.checked)}
                checked={global}
              />
              <span></span>
            </label>
          </div>
        </div>
        <div className={style.list_item_with_slider}>
          <div>Maximum Distance</div>
          <div className={style.item_value}>{maxDistance} KM</div>
          <div>
            <IOSSlider
              onChange={handleDistanceChange}
              aria-label="ios slider"
              defaultValue={maxDistance}
              value={maxDistance}
              valueLabelDisplay="off"
              max={50}
              min={2}
            />
          </div>
        </div>
        <div className={style.list_item}>
          <div>Looking for</div>
          <div className={style.item_value}>
            <select
              dir="rtl"
              value={lookingFor}
              onChange={(e) => setLookingFor(e.target.value)}
            >
              <option value="">Select</option>
              <option value="1">Female</option>
              <option value="2">Male</option>
            </select>
          </div>
        </div>
        <div className={style.list_item_with_slider}>
          <div>Age range</div>
          <div className={style.item_value}>{ageRange.join(' - ')}</div>
          <div>
            <IOSSlider
              value={ageRange}
              onChange={handleAgeChange}
              aria-labelledby="range-slider"
              valueLabelDisplay="off"
            />
          </div>
        </div>
        <div className={style.list_item}>
          <div>Preferred Language</div>
          <div className={style.item_value}>{settings.lang}</div>
        </div>
        <div className={style.help_text}>
          Going global will allow you to see celebrity from around the world.
        </div>
        <div className={style.list_item}>
          <div>Show me on Tinder</div>
          <div className="ios-toggle disabled">
            <label htmlFor="toggle2">
              <input type="checkbox" id="toggle2" checked disabled />
              <span></span>
            </label>
          </div>
        </div>
        <div className={style.help_text}>
          While turned off, you'll not be shown in the card stack. You can still
          see and chat with your matches.
        </div>
        <div className={style.item_label}>Notifications</div>
        <div className={style.list_item}>
          <div>Email</div>
          <div className={style.item_value}>Off</div>
        </div>
        <div className={style.list_item}>
          <div>Push Notifications</div>
          <div className={style.item_value}>Off</div>
        </div>
        <div className={style.item_label}>Misc</div>
        <div className={style.list_item}>
          <div>About this app</div>
          <div className={style.item_value}></div>
        </div>
        <div className={style.list_item}>
          <div>Push Help &amp; Support</div>
          <div className={style.item_value}></div>
        </div>
        <div className={style.list_item}>
          <div>Privacy Policy</div>
          <div className={style.item_value}></div>
        </div>
        <div className={`${style.list_item_imp} clickable`} onClick={signOut}>
          <div>Log Out</div>
        </div>
        <div className={style.app_info}>
          <img
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
            alt="Logo"
          />
          <span>Version 1.0</span>
        </div>
        <div className={style.list_item_imp}>
          <div>Delete Account</div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
