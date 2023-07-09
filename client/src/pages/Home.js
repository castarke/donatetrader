import React from 'react';
import SearchCriteria from '../components/SearchCriteria';
import Gallery from '../components/Gallery';
import RecentTrades from '../components/RecentTrades';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  searchContainer: {
    width: '30%',
    marginRight: '10px',
    border: '1px solid #ccc',
    padding: '10px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginRight: '0',
      marginBottom: '10px',
    },
  },
  itemsContainer: {
    width: '66.66%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}));

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
