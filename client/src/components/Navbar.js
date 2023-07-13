import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import Logo from "./Logo";
import {useStyles} from '../utils/makeStyles';
import auth from '../utils/auth';


function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const NavigationLinks = [
    <NavLink
      exact
      to="/login"
      className={classes.link}
      activeClassName="active"
      // style={linkStyle}
      key="login"
    >
      Login
    </NavLink>,
    <NavLink
      exact
      to="/signup"
      className={classes.link}
      activeClassName="active"
      // style={linkStyle}
      key="signup"
    >
      Signup
    </NavLink>,
    <NavLink
      exact
      to="/home"
      className={classes.navLink}
      activeClassName="active"
      key="home">
        Home
    </NavLink>,
    <NavLink
      exact
      to="/gallery"
      className={classes.navLink}
      activeClassName="active"
      key="gallery">
      Marketplace
    </NavLink>,
    <NavLink
      exact
      to="/account"
      className={classes.navLink}
      activeClassName="active"
      key="account">
      My Account
    </NavLink>,
    <NavLink
      exact
      to="/donations"
      className={classes.navLink}
      activeClassName="active"
      key="donations">
      Donations
    </NavLink>,
    <NavLink
      exact
      to="/about"
      className={classes.navLink}
      activeClassName="active"
      key="about">
      About
    </NavLink>,
    <NavLink
      exact
      to="/contact"
      className={classes.navLink}
      activeClassName="active"
      key="contact">
      Contact
    </NavLink>,
    // <NavLink
    //   exact
    //   to="/logout"
    //   className={classes.navLink}
    //   activeClassName="active"
    //   // style={linkStyle}
    //   key="gallery"
    // >
    //   Items for trade
    // </NavLink>,
  ];
  const handleLogout = () => {
    auth.logout();
  };
  const logoutLink = <NavLink 
      exact
      onClick={handleLogout}
      className={classes.navLink}   
      activeClassName="active"
      // style={linkStyle}
      key="account">
    Logout
  </NavLink>
console.log(NavigationLinks)
if(auth.loggedIn()) {
  NavigationLinks.splice(0,2,logoutLink)
}
  return (
    <AppBar position="static" style ={{backgroundColor: '#66b2b2'}}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.navLogo}>
          <Link to="/home" className={classes.navLink}>
            <Logo className={classes.navLogo} />
          </Link>
        </Typography>
        {isMobile ? (
          <DrawerComponent links={NavigationLinks} />
        ) : (
          <div className={classes.navLinks}>{NavigationLinks}</div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;