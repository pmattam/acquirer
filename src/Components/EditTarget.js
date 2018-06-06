import React from 'react';
import { connect } from 'react-redux';
import { updateTarget } from '../Actions/index';

let EditTargetWrapper = ({ target_companies, props, updateTarget }) => {

  // console.log('id from props', props.match.params.id);
  // console.log('tc', target_companies);
  let filteredTarget = target_companies.filter(target => target.id === props.match.params.id)[0];
  // console.log('ft', filteredTarget);

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log('ft', filteredTarget);
    updateTarget(filteredTarget);
    props.history.push(`/target/${filteredTarget.id}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input type='text' defaultValue={filteredTarget.company_name} readOnly/>
        </label>
        <label>
          Status:
          <select defaultValue={filteredTarget.status} onChange={event => filteredTarget.status = event.target.value}>
            <option value='Researching'>Researching</option>
            <option value='Pending Approval'>Pending Approval</option>
            <option value='Approved'>Approved</option>
            <option value='Declined'>Declined</option>
          </select>
        </label>
        <div>Company Profile</div>
        <label>
          Description: <input type='text' defaultValue={filteredTarget.company_profile.desc} onChange={event => filteredTarget.company_profile.desc = event.target.value}/>
        </label>
        <label>
          Address: <input type='text' defaultValue={filteredTarget.company_profile.address} onChange={event => filteredTarget.company_profile.address = event.target.value}/>
        </label>
        <label>
          Employees: <input type='text' defaultValue={filteredTarget.company_profile.employees} onChange={event => filteredTarget.company_profile.employees = event.target.value}/>
        </label>
        <label>
          Phone Number: <input type='text' defaultValue={filteredTarget.company_profile.phone_number} onChange={event => filteredTarget.company_profile.phone_number = event.target.value}/>
        </label>
        <label>
          Sector: <input type='text' defaultValue={filteredTarget.company_profile.sector} onChange={event => filteredTarget.company_profile.sector = event.target.value}/>
        </label>
        <label>
          Website: <input type='text' defaultValue={filteredTarget.company_profile.website} onChange={event => filteredTarget.company_profile.website = event.target.value}/>
        </label>
        <div>Financial Performance</div>
        <label>
          Revenue: <input type='text' defaultValue={filteredTarget.financial_performance.revenue} onChange={event => filteredTarget.financial_performance.revenue = event.target.value}/>
        </label>
        <label>
          Net Income: <input type='text' defaultValue={filteredTarget.financial_performance.net_income} onChange={event => filteredTarget.financial_performance.net_income = event.target.value}/>
        </label>
        <label>
          Market Cap: <input type='text' defaultValue={filteredTarget.financial_performance.market_cap} onChange={event => filteredTarget.financial_performance.market_cap = event.target.value}/>
        </label>
        <div>Key Contacts</div>
        <div>
          { 
            filteredTarget.key_contacts.map((contact, i) => 
              <div key={i}>
                <label>
                  Name: <input type='text' defaultValue={contact.name} onChange={event => contact.name = event.target.value}/>
                </label>
                <label>
                  Title: <input type='text' defaultValue={contact.title} onChange={event => contact.title = event.target.value}/>
                </label>
                <label>
                  Email: <input type='text' defaultValue={contact.email} onChange={event => contact.email = event.target.value}/>
                </label>
                <label>
                  Phone Number: <input type='text' defaultValue={contact.phone_number} onChange={event => contact.phone_number = event.target.value}/>
                </label>
              </div>)
          }
          </div>
        <button onClick={() => props.history.push('/')}>Cancel</button>
        <input type='submit' value='Save' />
      </form>
    </div>
  );
};
  
let mapStateToProps = ({ target_companies }, props) => ({ target_companies, props });
let mapDispatchToProps = dispatch =>  ({ updateTarget: target_company => dispatch(updateTarget(target_company)) });
let EditTarget = connect(mapStateToProps, mapDispatchToProps)(EditTargetWrapper);

export default EditTarget;