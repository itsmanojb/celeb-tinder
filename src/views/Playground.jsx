import React from 'react';
import TinderCards from '../components/Cards/TinderCards';
import SwipeButtons from '../components/Buttons/SwipeButtons';
import Header from '../components/Header/Header';

const Playground = () => {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
};

export default Playground;
