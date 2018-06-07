import React from 'react';

let TargetContacts = ({ target }) => 
  <div className='tc-main'>
    {target.key_contacts.map((contact, index) =>
    <div className='tc-sub'>
      <div className='tc-submain animated fadeIn' key={index}>
        <div>
          NAME &nbsp;|&nbsp;
          {contact.name}
        </div>
        <div>
          TITLE &nbsp;|&nbsp;
          {contact.title}
        </div>
        <div>
          PHONE &nbsp;|&nbsp;
          {contact.phone_number}
        </div>
        <div>
          EMAIL &nbsp;|&nbsp;
          {contact.email}
        </div>
      </div>
      <div className='tc-img-div'>
        <img className='tc-img' src={`/images/contact/${contact.name}.png`} alt={`/images/contact/${contact.name}.png`}/>
      </div>
    </div>)
    }
  </div>

export default TargetContacts;