import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  filteredTarget = this.props.target_companies.filter(target => target.id === this.props.match.params.id)[0];

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
    let target = this.filteredTarget;
    // console.log(target);
    return (
      <div>
        <div className='target-info'>
          <div>
            <img src={target.logo} alt={target.logo}/>
          </div>
          <div>
            {target.company_name}
          </div>
          <div>
            {target.status}
          </div>
          <div>
            <button>Edit</button>
          </div>
          <div>
            <button>Delete</button>
          </div>
        </div>
        <div className='target-navbar'>
          <div onClick = {this.setProfile}>Profile</div>
          <div onClick = {this.setContacts}>Contacts</div>
          <div onClick = {this.setFinance}>Financials</div>
        </div>
        {this.state.isProfile && <TargetProfile target={target}/>}
        {this.state.isKeyContacts && <TargetContacts target={target}/>}
        {this.state.isFinance && <TargetFinancialPerformance target={target}/>}
      </div>
    )
  }
};
  
let mapStateToProps = (state, props) => ({ target_companies: state.target_companies, props });
let TargetInformation = connect(mapStateToProps)(TargetInformationWrapper);
export default TargetInformation;