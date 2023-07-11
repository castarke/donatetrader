import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { GET_Latest_9 } from "../utils/queries";
import Item from "./item"; 
import useStyles from '../utils/styles'

const Gallery = ({categories}) => {

  const classes = useStyles();
  let items=[]
  const { loading, error, data } = useQuery(GET_Latest_9);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (categories && categories != 'noitemsfound'){
    items = categories.split(',')
  }else{
    for (let item of data.getAllItems){
        items.push(item._id)
    };
  }

  if (categories === 'noitemsfound'){
    return (
      <div className={classes.root} styles={{paddingTop: "20px"}}>

              <h1>No Items Found!</h1>

    </div>
    )
  }

  return (
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
  );
};

export default Gallery;