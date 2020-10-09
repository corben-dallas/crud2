import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import HomePageWorkspace from './components/worckspace/HomePageWorkspace';
import PostsWorkspace from './components/worckspace/PostsWorkspace';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePageWorkspace} />
        <Route path='/posts' component={PostsWorkspace} />
      </Switch>
    </Router>
  );
}

export default App;
