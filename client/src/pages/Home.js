import React from 'react';
import SearchCriteria from '../components/SearchCriteria';
import Gallery from '../components/Gallery';
import Contributions from '../pages/Contributions';
import { useStyles } from '../utils/makeStyles'

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <SearchCriteria />
        <Contributions />
      </div>
      <div className={classes.itemsContainer}>
        <Gallery />
      </div>
    </div>
  );
};
