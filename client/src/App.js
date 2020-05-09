import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Homefeed from './components/Homefeed';
import Notifications from './components/Notifications';
import Bookmarks from './components/Bookmarks';
import Profile from './components/Profile';
import TweetDetails from './components/TweetDetails';

function App() {
  return (
    <Wrapper>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact>
            <Homefeed />
          </Route>
          <Route path='/notifications' exact>
            <Notifications />
          </Route>
          <Route path='/bookmarks' exact>
            <Bookmarks />
          </Route>
          <Route path='/tweet/:tweetId' exact>
            <TweetDetails />
          </Route>
          <Route path='/:profileId' exact>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </Wrapper>

  );
}

const Wrapper = styled.div`
  display:flex;
  width: 800px;
  margin: 0 auto;

`;

export default App;
