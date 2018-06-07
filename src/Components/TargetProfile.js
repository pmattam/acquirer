import React from 'react';
import ProfileMap from './ProfileMap';

let TargetProfile = ({ target }) => 
  <div>
    <div className='profile-main'>
      <div>
        ADDRESS &nbsp;||&nbsp;
        {target.company_profile.address}
      </div>
      <div>
        WEBSITE &nbsp;||&nbsp;
        {target.company_profile.website}
      </div>
      <div>
        PHONE &nbsp;||&nbsp;
        {target.company_profile.phone_number}
      </div>
      <div>
        EMPLOYEES &nbsp;||&nbsp;
        {target.company_profile.employees}
      </div>
      <div>
        SECTOR &nbsp;||&nbsp;
        {target.company_profile.sector}
      </div>
      <div>
        DESCRIPTION &nbsp;||&nbsp;
        {target.company_profile.desc}
      </div>
    </div>
    <div className='profile-map'>
      <ProfileMap
      address={target.company_profile.address}/>
    </div>
  </div>

export default TargetProfile;