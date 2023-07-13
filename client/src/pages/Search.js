import React from 'react';
import { useParams } from 'react-router-dom';
import SearchCriteria from '../components/SearchCriteria';
import Gallery from '../components/Gallery';
// import RecentTrades from '../components/RecentTrades';
import { useStyles } from '../utils/makeStyles'

export default function Search() {
  const classes = useStyles();
  let categories = useParams()
  categories = categories.searchCriteria

console.log(categories)
  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <SearchCriteria />
      </div>
      <div className={classes.itemsContainer}>
        <Gallery categories={categories} />
      </div>
      {/* <div className={classes.searchContainer}>
        <RecentTrades />
      </div> */}
    </div>
  );
};
