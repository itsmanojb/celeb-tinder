import React from 'react';
import Header from '../components/Header/Header';
import AllMessages from '../components/Messages/AllMessages';

const Messages = () => {
  return (
    <div className="App no-footer scroll">
      <Header />
      <AllMessages />
    </div>
  );
};

export default Messages;
