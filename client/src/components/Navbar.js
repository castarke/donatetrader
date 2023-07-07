// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Typography } from '@material-ui/core';

// function Navigation() {
//   return (
//     <nav className='navbar'>
//       <div className='left-items'>
//         <Typography>
//           <Link to='/' color='inherit'>
//             Home
//           </Link>
//         </Typography>
//         <Typography>
//           <Link to='/items' color='inherit'>
//             Items
//           </Link>
//         </Typography>
//         <Typography>
//           <Link to='/donations' color='inherit'>
//             Donations
//           </Link>
//         </Typography>
//       </div>
//       <div className='right-items'>
//         <Typography>
//           <Link to='/account' color='inherit'>
//             My Account
//           </Link>
//         </Typography>
//         {/* <Logout /> */}
//       </div>
//     </nav>
//   );
// }

// export default Navigation;


import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "#7FFFD4",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const NavigationLinks = (
    <>
      <Typography>
        <Link to="/" color="inherit">
          Home
        </Link>
      </Typography>
      <Typography>
        <Link to="/about" color="inherit">
          About
        </Link>
      </Typography>
      <Typography>
        <Link to="/contact" color="inherit">
          Contact
        </Link>
      </Typography>
      <Typography>
        <Link to="/gallery" color="inherit">
          Items for trade
        </Link>
      </Typography>
      <Typography>
        <Link to="/account" color="inherit">
          My Account
        </Link>
      </Typography>
    </>
  );

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <Logo className={classes.logo} />
        </Typography>
        {isMobile ? (
          <DrawerComponent links={NavigationLinks} />
        ) : (
          <div className={classes.navlinks}>{NavigationLinks}</div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
