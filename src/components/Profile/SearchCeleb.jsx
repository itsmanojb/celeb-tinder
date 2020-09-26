import React, { useState } from 'react';
import style from './Profile.module.css';

const SearchCeleb = ({ onSearch }) => {
  const [q, setQ] = useState('');

  const onEnter = (event, callback) => event.key === 'Enter' && callback();

  const performSearch = () => {
    if (q.trim().length > 0) {
      onSearch(q);
    }
  };

  return (
    <div className={style.celeb_search}>
      <div className={style.searchbox}>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search celebrity.."
          autoComplete="off"
          onKeyPress={(e) => onEnter(e, performSearch)}
        />
      </div>
    </div>
  );
};

export default SearchCeleb;
