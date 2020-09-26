import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Messages from './views/Messages';
import Playground from './views/Playground';
import Profile from './views/Profile';
import ChatWindow from './views/ChatWindow';
import ProfileAlias from './views/ProfileAlias';
import ScrollToTop from './utilities/scroll';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Playground />
        </Route>
        <Route path="/match" component={Playground} />
        <Route path="/profile" component={Profile} />
        <Route path="/alias" component={ProfileAlias} />
        <Route path="/messages" component={Messages} />
        <Route path="/chat" component={ChatWindow} />
      </Switch>
    </Router>
  );
}

export default App;
