import React from 'react';
import { Redirect } from 'react-router-dom';
import BlankHeader from '../components/Header/BlankHeader';
import EditProfile from '../components/Settings/EditProfile';
import useLocalStorage from '../utilities/useLSHook';

const EditInfo = () => {
  const [user] = useLocalStorage('C_TIND_ALIAS', null);

  return user ? (
    <div className="App scroll no-footer">
      <BlankHeader title="Edit Info" />
      <EditProfile />
    </div>
  ) : (
    <Redirect to="/profile" />
  );
};

export default EditInfo;
