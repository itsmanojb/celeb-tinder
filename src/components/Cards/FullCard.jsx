import React, { useEffect, useState } from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import { IconButton } from '@material-ui/core';
import DataService from '../../utilities/dataService';
import style from './Card.module.css';
import SwipeButtons from '../Buttons/SwipeButtons';

const FullCard = ({ id, closeCard }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!id) return;
    DataService.getCelebrityDetails(id)
      .then((res) => {
        setDetails(res);
      })
      .catch((err) => {
        setDetails(null);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getAge = (d) => {
    return new Date().getFullYear() - +d.split('-')[0];
  };

  const getDOB = (d) => {
    const date = d.split('-');
    return (
      new Date(d).toLocaleString('en-GB', { month: 'long' }) +
      ' ' +
      date[1] +
      ', ' +
      date[0]
    );
  };

  return (
    details && (
      <div className={style.full_card_wrapper}>
        <div className={style.full_card}>
          <div className={style.full_image}>
            <img
              src={DataService.getCelebPofilesUrl(details.profile_path, 'hd')}
              alt=".."
            />
          </div>
          <div className={style.full_card_content}>
            <div className={style.close_btn}>
              <IconButton aria-label="settings" onClick={closeCard}>
                <GetAppIcon />
              </IconButton>
            </div>
            <div className={style.full_card_details}>
              <h4>
                {details.name}
                {details.birthday && (
                  <span>, {getAge(details.birthday)}</span>
                )}{' '}
              </h4>
              <ul>
                <li>{details.birthday ? getDOB(details.birthday) : '-'}</li>
                <li>{details.place_of_birth || '-'}</li>
              </ul>
              <p>{details.biography}</p>
            </div>
            <div className={style.report}>
              Report {details.name.split(' ')[0]}
            </div>
          </div>
        </div>
        <SwipeButtons alt={true} />
      </div>
    )
  );
};

export default FullCard;
