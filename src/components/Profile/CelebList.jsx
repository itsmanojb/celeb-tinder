import React from 'react';
import { useHistory } from 'react-router-dom';
import DataService from '../../utilities/dataService';
import { firestore } from '../../utilities/firebase';
import useLocalStorage from '../../utilities/useLSHook';
import style from './Profile.module.css';

const CelebItem = ({ data, na }) => {
  const history = useHistory();
  const [user] = useLocalStorage('C_TIND_USER', null);

  async function setAlias() {
    if (isTaken(data.id)) return;
    const c = {
      name: data.name,
      photo: DataService.getCelebPhotoUrl(data.profile_path),
      id: data.id,
    };

    const usersRef = firestore.doc(`users/${user.uid}`);
    await usersRef.set({ alias: c, alias_id: data.id }, { merge: true });
    localStorage.setItem('C_TIND_ALIAS', JSON.stringify(c));
    history.goBack();
  }

  const getMovieNames = (items) => {
    const top = items.filter((i) => i.media_type === 'movie');
    return top.length ? top[0].title : '';
  };

  function isTaken(id) {
    return na.indexOf(id) > -1;
  }

  return (
    <div
      className={`${style.celeb_item} ${isTaken(data.id) ? style.na : ''}`}
      onClick={setAlias}
    >
      <div className={style.celeb_dp}>
        <img
          src={DataService.getCelebPhotoUrl(data.profile_path, 'm')}
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

const CelebList = ({ results, total, takenIds }) => {
  return (
    <div className={style.celeb_list}>
      {results.length !== total && (
        <span>
          Showing top {results.length} of total {total} results
        </span>
      )}
      {results.map((celeb) => (
        <CelebItem key={celeb.id} data={celeb} na={takenIds} />
      ))}
    </div>
  );
};

export default CelebList;
