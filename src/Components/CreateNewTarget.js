import React, { Component } from 'react';
import { connect } from 'react-redux';
import add_button from '../Icons/add_button.png';
import '../index.css';
import { createNewTarget } from '../Actions/index';

class CreateNewTargetWrapper extends Component {

  constructor(props, history) {
    super(props);
    this.state= {
      contacts: []
    };
  }
  
  target_company = {
    status: 'Researching',
    company_profile: {},
    financial_performance: {},
    key_contacts: []
  };

  handleSubmit = event => {
    event.preventDefault();
    this.target_company.key_contacts = this.state.contacts;
    console.log('targetcompany', this.target_company);
    this.target_company.id = this.target_company.company_name;
    this.props.createNewTarget(this.target_company);
    this.props.history.push('/home');
  };

  handleClick = () => {
    console.log('coming here');
    let contact = {};
    this.setState({ contacts: [...this.state.contacts, contact] });
  };

  handleUpload = (event) => {
    console.log(event.target.value);
  };

  render() {
    let contacts = this.state.contacts;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Company Name:
            <input type='text' onChange={event => this.target_company.company_name = event.target.value}/>
          </label>
          <label>
            Status:
            <select onChange={event=> this.target_company.status = event.target.value}>
              <option value='Researching'>Researching</option>
              <option value='Pending Approval'>Pending Approval</option>
              <option value='Approved'>Approved</option>
              <option value='Declined'>Declined</option>
            </select>
          </label>
          <div>Company Profile</div>
          <input type='text' placeholder='Description' onChange={event => this.target_company.company_profile.desc = event.target.value}/>
          <input type='text' placeholder='Address' onChange={event => this.target_company.company_profile.address = event.target.value}/>
          <input type='text' placeholder='Employees' onChange={event => this.target_company.company_profile.employees = event.target.value}/>
          <input type='text' placeholder='Phone Number' onChange={event => this.target_company.company_profile.phone_number = event.target.value}/>
          <input type='text' placeholder='Sector' onChange={event => this.target_company.company_profile.sector = event.target.value}/>
          <input type='text' placeholder='Website' onChange={event => this.target_company.company_profile.website = event.target.value}/>
          <div>Financial Performance</div>
          <input type='text' placeholder='Revenue' onChange={event => this.target_company.financial_performance.revenue = event.target.value}/>
          <input type='text' placeholder='Net Income' onChange={event => this.target_company.financial_performance.net_income = event.target.value}/>
          <input type='text' placeholder='Market Cap' onChange={event => this.target_company.financial_performance.market_cap = event.target.value}/>
          <div>Key Contacts</div>
          <div>
            <img src={add_button} className='new-contact-icon' alt={add_button} onClick={this.handleClick}/>
            { 
              contacts.map((contact, i) => 
                <div key={i}>
                  <input type='text' placeholder='Name' onChange={event => contact['name'] = event.target.value}/>
                  <input type='text' placeholder='Title' onChange={event => contact['title'] = event.target.value}/>
                  <input type='text' placeholder='Email' onChange={event => contact['email'] = event.target.value}/>
                  <input type='text' placeholder='Phone Number' onChange={event => contact['phone_number'] = event.target.value}/>
              </div>)
            }
              </div>
          <button onClick={() => this.props.history.push('/home')}>Cancel</button>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  };
}

let mapStateToProps = (state, props) => ({ props });

let mapDispatchToProps = dispatch =>  ({ createNewTarget: target_company => dispatch(createNewTarget(target_company)) });

let CreateNewTarget = connect(mapStateToProps, mapDispatchToProps)(CreateNewTargetWrapper);

export default CreateNewTarget;