import React from 'react';
import { Link } from 'react-router-dom';

let Header = () => 
  <div className='header-main'>
    <div className='header-logo-div'>
      <Link to='/home'>
        <img className='header-logo' src={'/images/app-logo/building-logo.png'} alt={'/images/app-logo/square-logo.png'} />
      </Link>
    </div>
    <div className='header-name-div'>
      <img className='header-name' src={'/images/app-logo/name-logo.png'} alt={'/images/app-logo/name-logo.png'}/>
    </div>
  </div>

export default Header;