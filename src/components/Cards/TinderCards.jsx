/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import Config from '../../utilities/config';
import DataService from '../../utilities/dataService';
import style from './Card.module.css';
import './loader.css';

const TinderCards = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

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

  const swiped = (direction, nameToDelete, index) => {
    if (index > 0) {
      console.log('removing ', nameToDelete);
    } else {
      setLoading(true);
      loadMore(page + 1);
      setPage(page + 1);
    }
    // setLastDirection(direction);
  };

  const outOffFrame = (name) => {
    console.log(name + ' left');
  };

  const getMovieNames = (items) => {
    return items
      .filter((i) => i.media_type === 'movie')
      .map((m) => m.title)
      .join(', ');
  };

  return (
    <div className={style.cards__container}>
      {loading ? (
        <div className="loadMore">
          <div className="loader">
            <div className="loader__figure"></div>
          </div>
        </div>
      ) : people.length > 0 ? (
        people.map((person, i) => (
          <TinderCard
            className={style.swipe}
            key={i}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name, i)}
            onCardLeftScreen={() => outOffFrame(person.name)}
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
                <p>{getMovieNames(person.known_for)}</p>
                <h3>{person.name}</h3>
              </div>
            </div>
          </TinderCard>
        ))
      ) : (
        <div className="info-text">That's All!</div>
      )}
    </div>
  );
};

export default TinderCards;
