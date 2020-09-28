import React from 'react';
import style from './Messages.module.css';

const ChatMessages = () => {
  const messages = [
    {
      id: 1,
      name: 'Manoj',
      date: 'Today',
      body: 'Welcome! Celebrity Tinder is a PWA built with React and Firebase.',
      img: 'https://manojbarman.in/static/media/me.6f8ef0ca.jpg',
      myMsg: false,
    },
    {
      id: 2,
      name: 'Manoj',
      date: 'Today',
      body:
        'This is a non-functional clone of Tinder. Celebrtiy Tinder, unlike actual, lets you pick celebrities as your profile alias. And you swipe like you are a celebrity. \n\nPS: Match-making is not implemented. Although you can learn more about the celebrities and their work.',
      img: 'https://manojbarman.in/static/media/me.6f8ef0ca.jpg',
      myMsg: false,
    },
    {
      id: 3,
      name: 'Manoj',
      date: 'Today',
      body: 'Keep swiping!',
      img: 'https://manojbarman.in/static/media/me.6f8ef0ca.jpg',
      myMsg: false,
    },
    {
      id: 4,
      name: 'Manoj',
      date: 'Today',
      body: '👍🏻',
      img: 'https://manojbarman.in/static/media/me.6f8ef0ca.jpg',
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
              <img src={msg.img} alt="" />
            </div>
          )}
          <div className={style.bubble}>{msg.body}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
