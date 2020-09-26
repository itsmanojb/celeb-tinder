import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Playground from './views/Playground';
import Profile from './views/Profile';
import ScrollToTop from './utilities/scroll';

const Messages = React.lazy(() => import('./views/Messages'));
const ChatWindow = React.lazy(() => import('./views/ChatWindow'));
const EditInfo = React.lazy(() => import('./views/EditInfo'));
const Settings = React.lazy(() => import('./views/Settings'));
const ProfileAlias = React.lazy(() => import('./views/ProfileAlias'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Suspense fallback={<div className="loading">Loading..</div>}>
          <Route exact path="/">
            <Playground />
          </Route>
          <Route path="/match" component={Playground} />
          <Route path="/profile" component={Profile} />
          <Route path="/edit-info" component={EditInfo} />
          <Route path="/alias" component={ProfileAlias} />
          <Route path="/messages" component={Messages} />
          <Route path="/chat" component={ChatWindow} />
          <Route path="/settings" component={Settings} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
