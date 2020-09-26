import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import style from './Card.module.css';

const TinderCards = () => {
  const [people] = useState([
    {
      name: 'a',
      imageUrl: 'http://placegoat.com/300',
    },
    {
      name: 'b',
      imageUrl: 'http://placegoat.com/300',
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log('removing ', nameToDelete);
    // setLastDirection(direction);
  };
  const outOffFrame = (name) => {
    console.log(name + ' left');
  };

  return (
    <div className={style.cards__container}>
      {people.map((person, i) => (
        <TinderCard
          className={style.swipe}
          key={i}
          preventSwipe={['up', 'down']}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOffFrame(person.name)}
        >
          <div
            className={style.card}
            style={{
              backgroundImage: `url(${person.imageUrl})`,
            }}
          >
            <div className={style.card__content}>
              <h3>{person.name}</h3>
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
