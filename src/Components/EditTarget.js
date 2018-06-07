import React from 'react';
import { connect } from 'react-redux';
import { updateTarget } from '../Actions/index';
import Header from './Header';

let EditTargetWrapper = ({ target_companies, props, updateTarget }) => {

  let filteredTarget = target_companies.filter(target => target.id === props.match.params.id)[0];

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log('ft', filteredTarget);
    updateTarget(filteredTarget);
    props.history.push(`/target/${filteredTarget.id}`);
  };

  return (
    <div>
      <Header/>
      <div className='edit-main'>
        <form className='edit-main' onSubmit={handleSubmit}>
          <label>Company Name</label>
          <input className='input' type='text' defaultValue={filteredTarget.company_name} readOnly/>
          <label>
            Status
            <select className='select-input' defaultValue={filteredTarget.status} onChange={event => filteredTarget.status = event.target.value}>
              <option value='Researching'>Researching</option>
              <option value='Pending Approval'>Pending Approval</option>
              <option value='Approved'>Approved</option>
              <option value='Declined'>Declined</option>
            </select>
          </label>
          <div>Company Profile</div>
          <label>
            Description<input className='input' type='text' defaultValue={filteredTarget.company_profile.desc} onChange={event => filteredTarget.company_profile.desc = event.target.value}/>
          </label>
          <label>
            Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className='input' type='text' defaultValue={filteredTarget.company_profile.address} onChange={event => filteredTarget.company_profile.address = event.target.value}/>
          </label>
          <label>
            Employees
            <input className='input' type='text' defaultValue={filteredTarget.company_profile.employees} onChange={event => filteredTarget.company_profile.employees = event.target.value}/>
          </label>
          <label>
            Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className='input' type='text' defaultValue={filteredTarget.company_profile.phone_number} onChange={event => filteredTarget.company_profile.phone_number = event.target.value}/>
          </label>
          <label>
            Sector&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className='input' type='text' defaultValue={filteredTarget.company_profile.sector} onChange={event => filteredTarget.company_profile.sector = event.target.value}/>
          </label>
          <label>
            Website&nbsp;&nbsp;&nbsp;<input className='input' type='text' defaultValue={filteredTarget.company_profile.website} onChange={event => filteredTarget.company_profile.website = event.target.value}/>
          </label>
          <div>Financial Performance</div>
          <label>
            Revenue&nbsp;&nbsp;&nbsp;&nbsp;<input className='input' type='text' defaultValue={filteredTarget.financial_performance.revenue} onChange={event => filteredTarget.financial_performance.revenue = event.target.value}/>
          </label>
          <label>
            Net Income
            <input className='input' type='text' defaultValue={filteredTarget.financial_performance.net_income} onChange={event => filteredTarget.financial_performance.net_income = event.target.value}/>
          </label>
          <label>
            Market Cap
            <input className='input' type='text' defaultValue={filteredTarget.financial_performance.market_cap} onChange={event => filteredTarget.financial_performance.market_cap = event.target.value}/>
          </label>
          <div>Key Contacts</div>
          <div>
            { 
              filteredTarget.key_contacts.map((contact, i) => 
                <div key={i}>
                  <label>
                    Name<input className='kc-input' type='text' defaultValue={contact.name} onChange={event => contact.name = event.target.value}/>
                  </label>
                  <label>
                    Title<input className='kc-input' type='text' defaultValue={contact.title} onChange={event => contact.title = event.target.value}/>
                  </label>
                  <label>
                    Email<input className='kc-input' type='text' defaultValue={contact.email} onChange={event => contact.email = event.target.value}/>
                  </label>
                  <label>
                    Phone Number<input className='kc-input' type='text' defaultValue={contact.phone_number} onChange={event => contact.phone_number = event.target.value}/>
                  </label>
                </div>)
            }
          </div>
          <div className='bt-div'>
            <button className='bt' onClick={() => props.history.push(`/target/${filteredTarget.id}`)}>Cancel</button>
            <input className='bt' type='submit' value='Save' />
          </div>
        </form>
      </div>
    </div>
  );
};
  
let mapStateToProps = ({ target_companies }, props) => ({ target_companies, props });
let mapDispatchToProps = dispatch =>  ({ updateTarget: target_company => dispatch(updateTarget(target_company)) });
let EditTarget = connect(mapStateToProps, mapDispatchToProps)(EditTargetWrapper);

export default EditTarget;