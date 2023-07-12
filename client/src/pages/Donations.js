import React from 'react';
import { useQuery } from '@apollo/client';
import SearchCriteria from '../components/SearchCriteria';
import RecentTrades from '../components/RecentTrades';
import useStyles from '../utils/styles'
import {GET_DONATIONS} from '../utils/queries'
import { Grid, Paper } from "@material-ui/core";
import Item from '../components/item'

export default function Donations() {
  const classes = useStyles();
  let items = []
  const { loading, error, data } = useQuery(GET_DONATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  for (let item of data.getDonations){
    items.push(item._id)
    };

  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <SearchCriteria />
      </div>
      <div className={classes.itemsContainer}>
        <div className={classes.root}>
        <Grid container spacing={2}>
            {items.map((item) => (
            <Grid item xs={4} key={item}>
                <Paper className={classes.paper}>
                <Item itemId={item} />
                </Paper>
            </Grid>
            ))}
        </Grid>
        </div>
      </div>
      <div className={classes.searchContainer}>
        <RecentTrades />
      </div>
    </div>
  );
};