import React from 'react';

let TargetContacts = ({ target }) => 
  <div>
    {target.key_contacts.map((contact, index) => 
      <div key={index}>
        <div>
          {contact.name}
        </div>
        <div>
          {contact.title}
        </div>
        <div>
          {contact.phone_number}
        </div>
        <div>
          {contact.email}
        </div>
      </div>)
    }
  </div>

export default TargetContacts;