import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TargetProfile from './TargetProfile';
import TargetContacts from './TargetContacts';
import TargetFinancialPerformance from './TargetFinancialPerformance';

class TargetInformationWrapper extends Component {

  constructor(props) {
    super(props);
    this.state= {
      isProfile: true,
      isKeyContacts: false,
      isFinance: false
    };
  }

  setProfile = () => {
    this.setState({
      isProfile: true,
      isKeyContacts: false,
      isFinance: false
    })
  }
  setContacts = () => {
    this.setState({
      isProfile: false,
      isKeyContacts: true,
      isFinance: false
    })
  }
  setFinance = () => {
    this.setState({
      isProfile: false,
      isKeyContacts: false,
      isFinance: true
    })
  }
  render() {
    console.log(this.props);
    return (
      <div>
      <div className='target-navbar'>
        <div onClick = {this.setProfile}>Company Profile</div>
        <div onClick = {this.setContacts}>Contacts</div>
        <div onClick = {this.setFinance}>Financial Performance</div>
      </div>
      
      {this.state.isProfile && <TargetProfile />}
      {this.state.isKeyContacts && <TargetContacts />}
      {this.state.isFinance && <TargetFinancialPerformance />}
      </div>
    )
  }
};
  
let mapStateToProps = (state, props) => ({ props });
let TargetInformation = connect(mapStateToProps)(TargetInformationWrapper);
export default TargetInformation;