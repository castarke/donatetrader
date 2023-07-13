import React from 'react';
import SearchCriteria from '../components/SearchCriteria';
import Contributions from './Contributions';
import { useStyles } from '../utils/makeStyles'

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <SearchCriteria />
      </div>
      <div className={classes.itemsContainer} style={{textAlign: 'center'}}>
        <h2>Thank you for the donation!</h2>
        <h2>It is much welcomed and will be put to good use</h2>
      </div>
      <div className={classes.searchContainer}>
        <Contributions />
      </div>
    </div>
  );
};