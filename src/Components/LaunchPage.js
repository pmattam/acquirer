import React from 'react';
import { Link } from 'react-router-dom';

let LaunchPage = () => 
  <div>
    <div className='launchpage'>
      <img className='launchpage-logo' src={'/images/app-logo/building-name.png'} alt={'/images/app-logo/building-name.png'}/>
      <Link to={'/home'}>
        <div className='launching-text animated fadeInUpBig'>
          Let's Get Started
        </div>
      </Link>
    </div>
    
  </div>

export default LaunchPage;