import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Card.css';

const TinderCards = () => {
  const [people] = useState([
    {
      name: 'a',
      imageUrl: 'http://placegoat.com/200',
    },
    {
      name: 'b',
      imageUrl: 'http://placegoat.com/200',
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
    <div className="cards-container">
      {people.map((person, i) => (
        <TinderCard
          className="swipe"
          key={i}
          preventSwipe={['up', 'down']}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOffFrame(person.name)}
        >
          <div
            className="card"
            style={{
              backgroundImage: `url(${person.imageUrl})`,
            }}
          >
            <div className="card-content">
              <h3>{person.name}</h3>
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
