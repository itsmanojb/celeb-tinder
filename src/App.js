import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Messages from './views/Messages';
import Playground from './views/Playground';
import Profile from './views/Profile';
import ChatWindow from './views/ChatWindow';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Playground />
        </Route>
        <Route path="/match" children={Playground} />
        <Route path="/profile" children={Profile} />
        <Route path="/messages" children={Messages} />
        <Route path="/chat" children={ChatWindow} />
      </Switch>
    </Router>
  );
}

export default App;
