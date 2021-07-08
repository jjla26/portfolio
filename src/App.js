import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './components/homePage/homePage'
import Posts from './components/posts/posts'
import Projects from './components/projects/projects'
import SinglePost from './components/singlePost/singlePost'
import SingleProject from './components/singleProject/singleProject'

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
