import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CreateNewTarget from '../Components/CreateNewTarget';
import HomePage from '../Components/HomePage';
import TargetInformation from '../Components/TargetInformation';
import EditTarget from '../Components/EditTarget';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/newtarget' component={CreateNewTarget}/>
        <Route path='/target/:id' component={TargetInformation}/>
        <Route path='/edittarget/:id' component={EditTarget}/>
        <Route exact path='/' component={HomePage}/> 
      </Switch>
    </div>
  </Router>
);

export default App;