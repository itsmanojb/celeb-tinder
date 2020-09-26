import React from 'react';
import Header from './components/Header/Header';
import TinderCards from './components/Cards/TinderCards';
import SwipeButtons from './components/Buttons/SwipeButtons';

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
