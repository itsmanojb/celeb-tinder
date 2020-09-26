import React from 'react';
import { useHistory } from 'react-router-dom';
import DataService from '../../utilities/dataService';
import style from './Profile.module.css';

const CelebItem = ({ data }) => {
  const history = useHistory();

  function setAlias() {
    const c = {
      name: data.name,
      photo: DataService.getCelebPhotoUrl(data.profile_path),
      id: data.id,
    };
    localStorage.setItem('C_TIND_ALIAS', JSON.stringify(c));
    history.goBack();
  }

  const getMovieNames = (items) => {
    const top = items.filter((i) => i.media_type === 'movie');
    return top[0].title || '';
  };
  return (
    <div className={style.celeb_item} onClick={setAlias}>
      <div className={style.celeb_dp}>
        <img
          src={DataService.getCelebPhotoUrl(data.profile_path)}
          alt={data.name}
        />
      </div>
      <div>
        <h4>{data.name}</h4>
        <p>{getMovieNames(data.known_for)}</p>
      </div>
    </div>
  );
};

const CelebList = ({ results, total }) => {
  return (
    <div className={style.celeb_list}>
      {results.length !== total && (
        <span>
          Showing top {results.length} of total {total} results
        </span>
      )}
      {results.map((celeb) => (
        <CelebItem key={celeb.id} data={celeb} />
      ))}
    </div>
  );
};

export default CelebList;
