import React from 'react';
import SearchCriteria from '../components/SearchCriteria';
import Gallery from '../components/Gallery';
import RecentTrades from '../components/RecentTrades';
import useStyles from '../utils/styles'

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <SearchCriteria />
      </div>
      <div className={classes.itemsContainer}>
        <Gallery />
      </div>
      <div className={classes.searchContainer}>
        <RecentTrades />
      </div>
    </div>
  );
};
