import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/HomePage';
import CreateNewTarget from '../Components/CreateNewTarget';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/newtarget' component={CreateNewTarget}/>
        <Route exact path='/' component={HomePage}/> 
      </Switch>
    </div>
  </Router>
);

export default App;