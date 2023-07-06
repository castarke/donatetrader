import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const RecentTrades = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Recent Trades
      </Typography>
      {/* Add recent trades content here */}
      <Typography variant="body1">
        Trade 1
      </Typography>
      <Typography variant="body1">
        Trade 2
      </Typography>
      {/* Add more recent trades here */}
    </Paper>
  );
};

export default RecentTrades;
