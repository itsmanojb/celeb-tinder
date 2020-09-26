import React from 'react';
import ChatHeader from '../components/Header/ChatHeader';
import ChatMessages from '../components/Messages/ChatMessages';
import ComposeMessage from '../components/Messages/ComposeMessage';

const ChatWindow = () => {
  return (
    <div className="App has-msgbox">
      <ChatHeader />
      <ChatMessages />
      <ComposeMessage />
    </div>
  );
};

export default ChatWindow;
