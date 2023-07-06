import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

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

  const galleryImages = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    "https://example.com/image4.jpg",
    "https://example.com/image5.jpg",
    "https://example.com/image6.jpg",
    "https://example.com/image7.jpg",
    "https://example.com/image8.jpg",
    "https://example.com/image9.jpg"
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {galleryImages.map((image, index) => (
          <Grid item xs={4} key={index}>
            <Paper className={classes.paper}>
              <img src={image} alt={`Image ${index + 1}`} width="100%" />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Gallery;