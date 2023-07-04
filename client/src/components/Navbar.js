import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='navbar'>
      <div className='left-items'>
        <Link to='/'>Home</Link>
        <Link to='/items'>Items</Link>
        <Link to='/donations'>Donations</Link>
      </div>
      <div className='right-items'>
        <Link to='/account'>My Account</Link>
        {/* <Logout /> */}
      </div>
    </nav>
  );
}

export default Navigation;
