import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BlankHeader from '../components/Header/BlankHeader';
import CelebList from '../components/Profile/CelebList';
import SearchCeleb from '../components/Profile/SearchCeleb';
import DataService from '../utilities/dataService';

const ProfileAlias = () => {
  const history = useHistory();

  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const prof = localStorage.getItem('C_TIND_ALIAS');
    if (prof) {
      history.push('/profile');
    }
  }, []); // eslint-disable-line

  useEffect(() => {
    if (searchQuery) {
      setSearching(true);
      DataService.search(searchQuery)
        .then((res) => {
          setTotal(res.total_results);
          const celeb = res.results.filter(
            (celeb) =>
              celeb.known_for_department === 'Acting' &&
              celeb.profile_path !== null
          );

          setSearchResults(celeb);
          setSearching(false);
          setSearched(true);
        })
        .catch((err) => {
          setSearching(false);
          setSearched(true);
        });
    }
  }, [searchQuery]);

  return (
    <div className="App scroll search">
      <BlankHeader />
      <SearchCeleb onSearch={(e) => setSearchQuery(e)} />
      {searching ? (
        <div className="info-text">Searching..</div>
      ) : searchResults.length > 0 ? (
        <CelebList total={total} results={searchResults} />
      ) : searched ? (
        <div className="info-text">No results</div>
      ) : (
        <div className="info-text">Powered By TMDb</div>
      )}
    </div>
  );
};

export default ProfileAlias;
