import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import TinderCards from '../components/Cards/TinderCards';
import SwipeButtons from '../components/Buttons/SwipeButtons';
import Header from '../components/Header/Header';
import useLocalStorage from '../utilities/useLSHook';

const Playground = () => {
  const [alias] = useLocalStorage('C_TIND_ALIAS', null);
  const [popupShown, setPopupShown] = useState(false);

  const showDetails = (e) => {
    setPopupShown(e);
  };

  return alias ? (
    <div className={`${popupShown ? 'App popup' : 'App'}`}>
      {!popupShown && <Header />}
      <TinderCards showMoreDetails={(e) => showDetails(e)} />
      {!popupShown && <SwipeButtons />}
    </div>
  ) : (
    <Redirect to="/profile" />
  );
};

export default Playground;
