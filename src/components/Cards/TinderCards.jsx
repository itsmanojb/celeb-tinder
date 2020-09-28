/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react';
import TinderCard from 'react-tinder-card';
import InfoIcon from '@material-ui/icons/Info';
import Config from '../../utilities/config';
import DataService from '../../utilities/dataService';
import style from './Card.module.css';
import './loader.css';
import FullCard from './FullCard';

const TinderCards = ({ showMoreDetails }) => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const [current, setCurrent] = useState(0);

  const me = JSON.parse(localStorage.getItem('C_TIND_ALIAS')).id;
  const genderCoice = localStorage.getItem('C_TIND_SETTINGS')
    ? JSON.parse(localStorage.getItem('C_TIND_SETTINGS')).lookingFor
    : Config.default_settings.lookingFor;

  useEffect(() => {
    DataService.getPopularCelebrities(page)
      .then((res) => {
        const allCelebs = res.results;
        setHasMore(res.total_pages > page);
        let filteredCelebs = allCelebs.filter((celeb) => celeb.id !== me);
        if (genderCoice) {
          filteredCelebs = filteredCelebs.filter(
            (celeb) => celeb.gender === genderCoice
          );
        }
        if (filteredCelebs.length) {
          setPeople(filteredCelebs);
          const curr = filteredCelebs.length - 1;
          setCurrent(curr);
        } else {
          setPeople([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setPeople([]);
      });
  }, []);

  function loadMore(page) {
    if (!hasMore) return;
    DataService.getPopularCelebrities(page)
      .then((res) => {
        // console.log(res);
        const allCelebs = res.results;
        setHasMore(res.total_pages > page);
        let filteredCelebs = allCelebs.filter((celeb) => celeb.id !== me);
        if (genderCoice) {
          filteredCelebs = filteredCelebs.filter(
            (celeb) => celeb.gender === genderCoice
          );
        }
        if (filteredCelebs.length) {
          setPeople(filteredCelebs);
        } else {
          setPeople([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setPeople([]);
      });
  }

  const swiped = (direction, nameToDelete, index, id) => {
    // if (direction === 'up') {
    //   showDetails(id);
    //   return;
    // }
    if (index > 0) {
      console.log('removing ', nameToDelete);
      people.pop();
      setPeople(people);
      setCurrent(people.length - 1);
    } else {
      setLoading(true);
      loadMore(page + 1);
      setPage(page + 1);
    }
    // setLastDirection(direction);
  };

  // const outOffFrame = (name) => {
  //   console.log(name + ' left');
  // };

  const getMovieNames = (items) => {
    return items
      .filter((i) => i.media_type === 'movie')
      .map((m) => m.title)
      .join(', ');
  };

  function showDetails() {
    setShowPreview(true);
    showMoreDetails(true);
  }

  function hideDetails() {
    setShowPreview(false);
    showMoreDetails(false);
  }

  return showPreview ? (
    <FullCard id={people[current].id} closeCard={hideDetails} />
  ) : (
    <div className={style.cards__container}>
      {loading ? (
        <div className="loadMore">
          <div className="loader">
            <div className="loader__figure"></div>
          </div>
        </div>
      ) : people.length > 0 ? (
        people.map((person, i) => (
          <Fragment key={i}>
            <TinderCard
              className={style.swipe}
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => swiped(dir, person.name, i, person.id)}
              // onCardLeftScreen={() => outOffFrame(person.name)}
            >
              <div
                className={style.card}
                style={{
                  backgroundImage: `url(${DataService.getCelebPofilesUrl(
                    person.profile_path
                  )})`,
                }}
              >
                <div className={style.card__content}>
                  <div className={style.card__content_text}>
                    <h3>{person.name}</h3>
                    <p>{getMovieNames(person.known_for)}</p>
                  </div>
                  <div
                    className={style.card__content_icon}
                    onClick={(e) => showDetails(person.id)}
                  >
                    <InfoIcon />
                  </div>
                </div>
              </div>
            </TinderCard>
            <div
              className={style.click_area}
              onClick={(e) => showDetails()}
            ></div>
          </Fragment>
        ))
      ) : (
        <div className="info-text">That's All!</div>
      )}
    </div>
  );
};

export default TinderCards;
