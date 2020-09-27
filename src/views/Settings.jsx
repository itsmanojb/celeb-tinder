import React from 'react';
import ActionHeader from '../components/Header/ActionHeader';
import AccountSettings from '../components/Settings/AccountSettings';

const Settings = () => {
  return (
    <div className="App scroll no-footer">
      <ActionHeader title="Settings" />
      <AccountSettings />
    </div>
  );
};

export default Settings;
