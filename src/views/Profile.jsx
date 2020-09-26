import React from 'react';
import Header from '../components/Header/Header';
import MyProfile from '../components/Profile/MyProfile';

const Profile = () => {
  return (
    <div className="App no-footer scroll">
      <Header />
      <MyProfile />
    </div>
  );
};

export default Profile;
