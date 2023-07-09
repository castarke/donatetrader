import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { GET_Latest_8 } from "../utils/queries";
import Item from "./item"; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Gallery = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_Latest_8);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const items = data.getAllItems;
  console.log(items)

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