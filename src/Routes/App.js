import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LaunchPage from '../Components/LaunchPage';
import CreateNewTarget from '../Components/CreateNewTarget';
import HomePage from '../Components/HomePage';
import TargetInformation from '../Components/TargetInformation';
import EditTarget from '../Components/EditTarget';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/home' component={HomePage}/>
        <Route path='/newtarget' component={CreateNewTarget}/>
        <Route path='/target/:id' component={TargetInformation}/>
        <Route path='/edittarget/:id' component={EditTarget}/> 
        <Route exact path='/' component={LaunchPage}/>
      </Switch>
    </div>
  </Router>
);

export default App;