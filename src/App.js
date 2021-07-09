import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';

import HomePage from './components/homePage/HomePage'
import Posts from './components/posts/Posts'
import AllProjects from './components/projects/AllProjects';
import SinglePost from './components/singlePost/SinglePost'
import SingleProject from './components/singleProject/SingleProject'

function App() {
  const [ switchValue, setSwitchValue ] = useState(false)

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        setSwitchValue(true)
      }
    }
  }, [])

  const handleSwitch = e => {
    setSwitchValue(e.target.checked)
    if (e.target.checked) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <HomePage handleSwitch={handleSwitch} switchValue={switchValue} />}/>
        <Route exact path='/projects' component={AllProjects}/>
        <Route path='/projects/:id' component={SingleProject}/>
        <Route exact path='/posts' component={Posts}/>
        <Route path='/posts/:id' component={SinglePost}/>
      </Switch>
      <Footer dark={switchValue} />
    </Router>
  );
}

export default App;
