import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './Messages.module.css';

const AllMessages = () => {
  const history = useHistory();
  const threads = [
    {
      id: 1,
      name: 'Manoj B',
      date: 'Today',
      body: 'Welcome to Celebrity Tinder. A clone app created just for fun.',
      img: 'https://manojbarman.in/static/media/me.6f8ef0ca.jpg',
    },
  ];

  function gotoChatWindow() {
    history.push('/chat');
  }

  return (
    <div className={style.page}>
      {/* <div className={style.header}>Messages</div> */}
      <div className={style.threads}>
        {threads.map((msg) => (
          <div
            key={msg.id}
            className={style.msg_thread}
            onClick={gotoChatWindow}
          >
            <div className={style.avatar}>
              <img src={msg.img} alt="" />
            </div>
            <div className={style.msg_glance}>
              <h4>{msg.name}</h4>
              <span>{msg.date}</span>
              <p>{msg.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMessages;
