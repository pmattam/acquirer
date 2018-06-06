import React from 'react';
import ProfileMap from './ProfileMap';

let TargetProfile = ({ target }) => 
  <div>
    <div>
      {target.company_profile.address}
    </div>
    <div>
      {target.company_profile.website}
    </div>
    <div>
      {target.company_profile.phone_number}
    </div>
    <div>
      {target.company_profile.employees}
    </div>
    <div>
      {target.company_profile.sector}
    </div>
    <div>
      {target.company_profile.desc}
    </div>
    <div>
      <ProfileMap
      address={target.company_profile.address}/>
    </div>
  </div>

export default TargetProfile;