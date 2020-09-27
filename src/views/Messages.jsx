import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';
import AllMessages from '../components/Messages/AllMessages';
import useLocalStorage from '../utilities/useLSHook';

const Messages = () => {
  const [user, setUser] = useLocalStorage('CTIND_USER', null);

  return user ? (
    <div className="App no-footer scroll">
      <Header />
      <AllMessages />
    </div>
  ) : (
    <Redirect to="/profile" />
  );
};

export default Messages;
