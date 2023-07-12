import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../components/Logo';
import styled, { keyframes } from 'styled-components';
import {useStyles} from '../utils/makeStyles'

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AnimatedAppBar = styled(AppBar)`
  background: linear-gradient(45deg, #020024, #66b2b2, #00d4ff);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 5s ease-in-out infinite;
`;

export default function LandingPage() {
  const classes = useStyles();

  return (
     <div className={classes.lpContainer}>
          <AnimatedAppBar position="static" className={classes.lpAppBar}>
              <Toolbar>
                <div className={classes.lpLogoContainer}>
                  <Logo className={classes.lpLogo} />
                </div>
              </Toolbar>
          </AnimatedAppBar>
        <div className={classes.lpAbout}>
            <Typography variant="body1">
              <p>
                  Welcome to <span className={classes.lpDTText}>DonateTrader</span>, the ultimate marketplace for users to donate and trade their items,
                  revolutionizing the way people exchange goods. Our platform is designed to foster a vibrant
                  community where individuals can connect, barter, and give back in a meaningful way.
              </p>
              <p>
                  At <span className={classes.lpDTText}>DonateTrader</span>, we believe in the power of sharing and sustainability, empowering users to find
                  new homes for their unwanted items while reducing waste and promoting a circular economy. Whether
                  you're looking to declutter your space, discover unique treasures, or contribute to a worthy cause,
                  our user-friendly interface and secure platform make it easy to connect with like-minded individuals
                  who share your passions.
              </p>
              <p>
                  Join our growing community today and experience the joy of giving and receiving through the art of
                  bartering at DonateTrader.
              </p>
            </Typography>
        </div>
      <div>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          color="primary"
          className={classes.lpButton}
          style ={{backgroundColor: '#66b2b2'}}
        >
          Sign Up
        </Button>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          className={classes.lpButton}
          style ={{backgroundColor: '#66b2b2'}}
        >
          Log In
        </Button>
    </div>
  </div>
  );
}