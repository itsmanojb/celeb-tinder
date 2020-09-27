import React from 'react';
import TinderCards from '../components/Cards/TinderCards';
import SwipeButtons from '../components/Buttons/SwipeButtons';
import Header from '../components/Header/Header';
import useLocalStorage from '../utilities/useLSHook';
import { Redirect } from 'react-router-dom';

const Playground = () => {
  const [user] = useLocalStorage('C_TIND_USER', null);
  const [alias] = useLocalStorage('C_TIND_ALIAS', null);

  return user && alias ? (
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
