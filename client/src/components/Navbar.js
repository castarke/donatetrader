import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

function Navigation() {
  return (
    <nav className='navbar'>
      <div className='left-items'>
        <Typography>
          <Link to='/' color='inherit'>
            Home
          </Link>
        </Typography>
        <Typography>
          <Link to='/items' color='inherit'>
            Items
          </Link>
        </Typography>
        <Typography>
          <Link to='/donations' color='inherit'>
            Donations
          </Link>
        </Typography>
      </div>
      <div className='right-items'>
        <Typography>
          <Link to='/account' color='inherit'>
            My Account
          </Link>
        </Typography>
        {/* <Logout /> */}
      </div>
    </nav>
  );
}

export default Navigation;