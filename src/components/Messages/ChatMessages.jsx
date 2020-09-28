import React from 'react';
import style from './Messages.module.css';
import avatar from './user.png';

const ChatMessages = () => {
  const messages = [
    {
      id: 0,
      name: 'You',
      date: 'Today',
      body: 'Hello there!',
      myMsg: true,
    },
    {
      id: 1,
      name: 'Manoj',
      date: 'Today',
      body: 'Welcome! Celebrity Tinder is a PWA built with React and Firebase.',
      myMsg: false,
    },
    {
      id: 2,
      name: 'Manoj',
      date: 'Today',
      body:
        'This is a non-functional clone of Tinder. Celebrtiy Tinder, unlike actual, lets you pick celebrities as your profile alias. And you swipe like you are a celebrity. \n\nPS: Match-making is not implemented. Although you can learn more about the celebrities and their work.',
      myMsg: false,
    },
    {
      id: 3,
      name: 'Manoj',
      date: 'Today',
      body: 'Keep swiping!',
      myMsg: false,
    },
    {
      id: 4,
      name: 'Manoj',
      date: 'Today',
      body: '👍🏻',
      myMsg: false,
    },
  ];
  return (
    <div className={style.msg_bubbles}>
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`${msg.myMsg ? style.outgoing : style.incoming}`}
        >
          {!msg.myMsg && (
            <div className={style.chat_avatar}>
              <img src={avatar} alt="" />
            </div>
          )}
          <div className={style.bubble}>{msg.body}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
