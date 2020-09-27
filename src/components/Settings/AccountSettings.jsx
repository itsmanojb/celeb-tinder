import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import GradeIcon from '@material-ui/icons/Grade';
import { auth } from '../../utilities/firebase';
import style from './Settings.module.css';

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
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function signOut() {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      localStorage.removeItem('CTIND_USER');
      auth.signOut();
    }
  }

  return (
    <div className={style.edit_page}>
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
        <div className={style.item_value}>
          Name will appear here, what if the name is too big
        </div>
      </div>
      <div className={style.list_item}>
        <div>Email</div>
        <div className={style.item_value}>email@address</div>
      </div>
      <div className={style.list_item}>
        <div>Phone</div>
        <div>123456</div>
      </div>
      <div className={style.help_text}>
        No mobile or email verification needed.
      </div>
      <div className={style.item_label}>Discovery Settings</div>
      <div className={style.list_item}>
        <div>Location</div>
        <div className={style.item_value}>my location</div>
      </div>
      <div className={style.list_item}>
        <div>Global</div>
        <div className="ios-toggle">
          <label htmlFor="toggle">
            <input type="checkbox" id="toggle" />
            <span></span>
          </label>
        </div>
      </div>
      <div className={style.list_item_with_slider}>
        <div>Maximum Distance</div>
        <div className={style.item_value}>10 KM</div>
        <div>
          <IOSSlider
            aria-label="ios slider"
            defaultValue={60}
            valueLabelDisplay="off"
          />
        </div>
      </div>
      <div className={style.list_item}>
        <div>Looking for</div>
        <div className={style.item_value}>Women</div>
      </div>
      <div className={style.list_item_with_slider}>
        <div>Age range</div>
        <div className={style.item_value}>Women</div>
        <div>
          <IOSSlider
            value={value}
            onChange={handleChange}
            aria-labelledby="range-slider"
            valueLabelDisplay="off"
          />
        </div>
      </div>
      <div className={style.list_item}>
        <div>Preferred Language</div>
        <div className={style.item_value}>English</div>
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
  );
};

export default AccountSettings;
