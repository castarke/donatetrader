// About.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    border: '1px solid teal',
    borderRadius: '4px',
    width: '50%',
    margin: '0 auto',
  },
  aboutHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#367588',
    textAlign: 'center',
    textShadow: '2px 2px 4px white',
  },
  aboutText: {
    textAlign: 'justify',
    fontSize: '18px',
    marginBottom: theme.spacing(2),
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    padding: theme.spacing(1),
  },
  image: {
    width: '100px', // adjust the width as needed
    height: '100px', // adjust the height as needed
    objectFit: 'cover',
    borderRadius: '50%',
    margin: theme.spacing(1),
  },
  text: {
    fontSize: '14px',
    textAlign: 'center',
  },
}));

function About() {
  const classes = useStyles();

return (
    <div className={classes.aboutContainer}>
      <h2 className={classes.aboutHeading}>About</h2>
      <p className={classes.aboutText}>
        Our mission is to help people reduce waste and help those in need. We believe that everyone should 
        have access to the things they need, regardless of their financial situation.
        We are committed to providing a safe and easy way for people to donate or trade items. 
        We have a team of experienced moderators who review all listings to ensure that they are 
        appropriate. We are also committed to giving back to the community. You can choose to donate 
        your item directly to charity.
      </p>
      <p>
        How it Works
        <ul>
          <li>To donate or trade an item, simply create a listing on our website. You can list any item 
            that you no longer need, as long as it is in good condition. </li>
          <li>Once you have created a listing, other users will be able to see it and contact you if they 
            are interested in donating or trading for the item. </li>
          <li>If you are interested in an item that someone else has listed, simply contact the seller and 
            make an offer. If the seller agrees to your offer, you can arrange to meet up and exchange 
            the items. </li>
        </ul>
      </p>
      <p>
        Benefits
        <ul>
          <li>You can reduce waste by giving away items that you no longer need.</li>
          <li>You can help someone in need by donating items to those who are less fortunate.</li>
          <li>You can save money by trading for items that you need.</li>
          <li>You can meet new people and make new friends.</li>
        </ul>
      </p>
      <div className={classes.imageContainer}>
        <Container>
          <h2>Your Developers</h2>
        </Container>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src="../../images/candler.jpg" alt="candler" />
          <p className={classes.text}>Candler</p>
        </div>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src="../../images/georgina.jpg" alt="georgina" />
          <p className={classes.text}>Georgina</p>
        </div>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src="../../images/dewey.jpg" alt="dewey" />
          <p className={classes.text}>Dewey</p>
        </div>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src="../../images/sandy.jpg" alt="sandy" />
          <p className={classes.text}>Sandy</p>
        </div>
      </div>
    </div>
  );
}

export default About;