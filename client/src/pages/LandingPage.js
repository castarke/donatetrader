import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../components/Logo';

const useStyles = makeStyles((theme) => ({
  landingPageContainer: {
    maxWidth: 800,
    margin: '0 auto',
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  appBar: {
    marginBottom: theme.spacing(3),
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    maxWidth: 200,
    height: 'auto',
  },
  about: {
    marginBottom: theme.spacing(3),
    fontFamily: 'Arial, sans-serif',
  },
  boldText: {
    fontWeight: 'bold',
  },
  DTText: {
    color: '#66b2b2',
    fontWeight: 'bold',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.landingPageContainer}>
      <AppBar position="static" className={classes.appBar} style={{ backgroundColor: '#66b2b2' }}>
        <Toolbar>
          <div className={classes.logoContainer}>
            <Logo className={classes.logo} />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.about}>
        <Typography variant="body1">
          <p>
            Welcome to <span className={classes.DTText}>DonateTrader</span>, the ultimate marketplace for users to donate and trade their items,
            revolutionizing the way people exchange goods. Our platform is designed to foster a vibrant
            community where individuals can connect, barter, and give back in a meaningful way.
          </p>
          <p>
            At <span className={classes.DTText}>DonateTrader</span>, we believe in the power of sharing and sustainability, empowering users to find
            new homes for their unwanted items while reducing waste and promoting a circular economy. Whether
            you're looking to declutter your space, discover unique treasures, or contribute to a worthy cause,
            our user-friendly interface and secure platform make it easy to connect with like-minded individuals
            who share your passions.
          </p>
        </Typography>
      </div>
      <div className="SignUp">
        {/* <Link to="/login">
          <Button variant="contained" color="primary">
            SignUp
          </Button>
        </Link>
      </div>
      <div className="LogIn">
        <Link to="/signup">
          <Button variant="contained" color="primary">
            LogIn
          </Button>
        </Link>
      </div> */}
      {/* <div> */}
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          color="primary"
          className={classes.button}
          style={{ backgroundColor: '#66b2b2' }}
        >
          Sign Up
        </Button>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          className={classes.button}
          style={{ backgroundColor: '#66b2b2' }}
        >
          Log In
        </Button>
      </div>
    </div>
  );
}
