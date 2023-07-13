import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Paper } from "@material-ui/core";
import { GET_ME, MY_ITEMS } from '../utils/queries';
import { Link } from 'react-router-dom';
import Item from '../components/item';
import { useStyles } from '../utils/makeStyles';
import auth from '../utils/auth';

const AccountInfo = () => {
  const classes = useStyles();
  const [user, setUser] = useState(auth.getProfile());
  const userId = user ? user.data._id : null;

  const { loading: meLoading, error: meError, data: meData, refetch: refetchMe } = useQuery(GET_ME, {
    variables: {
      userId: userId,
    },
    skip: !userId,
  });

  const { loading: itemsLoading, error: itemsError, data: itemsData, refetch: refetchItems } = useQuery(MY_ITEMS, {
    variables: {
      owner: userId,
    },
    skip: !userId,
  });

  useEffect(() => {
    if (userId) {
      refetchMe(); // Fetch account information
      refetchItems(); // Fetch items
    }
  }, [userId, refetchMe, refetchItems]);

  if (meLoading || itemsLoading) return <p>Loading account information...</p>;
  if (meError || itemsError) return <p>Error fetching account information: {meError.message}</p>;

  const { getUserById } = meData;
  const { username, email, city, state, zip, items } = getUserById;

  return (
    <div className={classes.container}>
      <div className={classes.accountContainer}>
          <div className={classes.myaccountContainer}>
            <h2>Account Information</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Zip: {zip}</p>
          </div>
          <div className={classes.myadditemsContainer}>
            <Link to={`/additem/${userId}`}>
            <button>Add Item</button>
          </Link>
          </div>
      </div>
      <div className={classes.itemsContainer}>
        <h2>My Items:</h2>
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
      
      </div>
    </div>
  );
};

export default AccountInfo;