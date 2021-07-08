import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import HomePage from './components/homePage/HomePage'
import Posts from './components/posts/Posts'
import Projects from './components/projects/Projects'
import SinglePost from './components/singlePost/SinglePost'
import SingleProject from './components/singleProject/SingleProject'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/projects' component={Projects}/>
        <Route path='/projects/:id' component={SingleProject}/>
        <Route exact path='/posts' component={Posts}/>
        <Route path='/posts/:id' component={SinglePost}/>
      </Switch>
    </Router>
  );
}

export default App;
