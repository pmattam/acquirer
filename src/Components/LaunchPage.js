import React from 'react';
import { Link } from 'react-router-dom';

let LaunchPage = () => 
  <div>
    <div>
      <img src={'/images/app-logo/building-name.png'} alt={'/images/app-logo/building-name.png'}/>
    </div>
    <Link to={'/home'}>
      <div className='animated fadeInUpBig'>
        Let's Get Started
      </div>
    </Link>
  </div>

export default LaunchPage;