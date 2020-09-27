import React from 'react';
import BlankHeader from '../components/Header/BlankHeader';
import EditProfile from '../components/Settings/EditProfile';

const EditInfo = () => {
  return (
    <div className="App scroll no-footer">
      <BlankHeader title="Edit Info" />
      <EditProfile />
    </div>
  );
};

export default EditInfo;
