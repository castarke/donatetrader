import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Paper } from "@material-ui/core";
import { GET_ME } from '../utils/queries';
import { Link } from 'react-router-dom';
import { MY_ITEMS } from '../utils/queries'
import Item from '../components/item';
import useStyles from '../utils/styles'

const AccountInfo = () => {
  const classes = useStyles();
  const userId = '64ad0a616d6e9c7814c9a4fa';

  const { loading, error, data } = useQuery(GET_ME, {
    variables: {
      userId: userId,
    },
  });

  const {loading:itemsLoading, error:itemsError, data:itemsData} = useQuery(MY_ITEMS,{
    variables: {
      owner: userId,
    }
  })

  if (loading || itemsLoading) return <p>Loading account information...</p>;
  if (error || itemsError ) return <p>Error fetching account information: {error.message}</p>;

  const { getUserById } = data;
  const { username, email, city, state, zip, items } = getUserById;

  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <h2>Account Information</h2>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zip: {zip}</p>
      </div>
      <div className={classes.itemsContainer}>
        <h2>Items:</h2>
        <div>
          <Grid container spacing={2}>
            {items.map((item) => (
            <Grid item xs={4} key={item._id}>
              <Paper className={classes.paper}>
              <Item itemId={item._id} />
              <Link to={`/updateitem/${item._id}`}>
                <button>Update Item</button>
              </Link>
              </Paper>
            </Grid>
            ))}
          </Grid>
        </div>
        <Link to={`/additem/${userId}`}>
          <button>Add Item</button>
        </Link>
      </div>
    </div>
  );
};


export default AccountInfo;