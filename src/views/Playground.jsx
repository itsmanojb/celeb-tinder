import React from 'react';
import TinderCards from '../components/Cards/TinderCards';
import SwipeButtons from '../components/Buttons/SwipeButtons';
import Header from '../components/Header/Header';
import useLocalStorage from '../utilities/useLSHook';
import { Redirect } from 'react-router-dom';

const Playground = () => {
  const [user, setUser] = useLocalStorage('CTIND_USER', null);

  return user ? (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  ) : (
    <Redirect to="/profile" />
  );
};

export default Playground;
