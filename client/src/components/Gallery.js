import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { GET_Latest_9 } from "../utils/queries";
import Item from "./item"; 
import useStyles from '../utils/styles'

const Gallery = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_Latest_9);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const items = data.getAllItems;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={4} key={item._id}>
            <Paper className={classes.paper}>
              <Item itemId={item._id} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Gallery;