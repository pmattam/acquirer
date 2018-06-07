import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TargetProfile from './TargetProfile';
import TargetContacts from './TargetContacts';
import TargetFinancialPerformance from './TargetFinancialPerformance';
import { deleteTarget } from '../Actions/index';

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
    });
  };
  setContacts = () => {
    this.setState({
      isProfile: false,
      isKeyContacts: true,
      isFinance: false
    });
  };
  setFinance = () => {
    this.setState({
      isProfile: false,
      isKeyContacts: false,
      isFinance: true
    });
  };
  handleDelete = (event) => {
    if(window.confirm('Are you sure you wish to delete this company')){
      this.props.deleteTarget(this.filteredTarget);
      this.props.history.push('/home');
    }
  };

  render() {
    let target = this.filteredTarget;
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
            <Link to={`/edittarget/${target.id}`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={this.handleDelete}>Delete</button>
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
let mapDispatchToProps = dispatch => ({ deleteTarget: target_company => dispatch(deleteTarget(target_company))});
let TargetInformation = connect(mapStateToProps, mapDispatchToProps)(TargetInformationWrapper);
export default TargetInformation;