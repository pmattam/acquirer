import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CreateNewTarget from '../Components/CreateNewTarget';
import HomePage from '../Components/HomePage';
// import TargetContacts from '../Components/TargetContacts';
// import TargetFinancialPerformance from '../Components/TargetFinancialPerformance';
import TargetInformation from '../Components/TargetInformation';
// import TargetProfile from '../Components/TargetProfile';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/newtarget' component={CreateNewTarget}/>
        {/* <Route path='/target/profile/:id' component={TargetProfile}/>
        <Route path='/target/contacts/:id' component={TargetContacts}/>
        <Route path='/target/performance/:id' component={TargetFinancialPerformance}/> */}
        <Route path='/target/:id' component={TargetInformation}/>
        <Route exact path='/' component={HomePage}/> 
      </Switch>
    </div>
  </Router>
);

export default App;