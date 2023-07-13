import React from "react";
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
import { useStyles } from "../utils/makeStyles";
import auth from "../utils/auth";

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleLogout = () => {
    auth.logout();
  };

  const renderNavigationLinks = () => {
    if (auth.loggedIn()) {
      return [
        <NavLink
          exact
          to="/home"
          className={classes.navLink}
          activeClassName="active"
          key="home"
        >
          Home
        </NavLink>,
        <NavLink
          exact
          to="/gallery"
          className={classes.navLink}
          activeClassName="active"
          key="gallery"
        >
          Items for trade
        </NavLink>,
        <NavLink
          exact
          to="/account"
          className={classes.navLink}
          activeClassName="active"
          key="account"
        >
          My Account
        </NavLink>,
        <NavLink
          exact
          to="/donations"
          className={classes.navLink}
          activeClassName="active"
          key="donations"
        >
          Donations
        </NavLink>,
        <NavLink
          exact
          to="/about"
          className={classes.navLink}
          activeClassName="active"
          key="about"
        >
          About
        </NavLink>,
        <NavLink
          exact
          to="/contact"
          className={classes.navLink}
          activeClassName="active"
          key="contact"
        >
          Contact
        </NavLink>
      ];
    } else {
      return [
        <NavLink
          exact
          to="/login"
          className={classes.link}
          activeClassName="active"
          key="login"
        >
          Login
        </NavLink>,
        <NavLink
          exact
          to="/signup"
          className={classes.link}
          activeClassName="active"
          key="signup"
        >
          Signup
        </NavLink>
      ];
    }
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#66b2b2" }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.navLogo}>
          <Link to="/home" className={classes.navLink}>
            <Logo className={classes.navLogo} />
          </Link>
        </Typography>
        {isMobile ? (
          <DrawerComponent links={renderNavigationLinks()} handleLogout={handleLogout} />
        ) : (
          <div className={classes.navLinks}>
            {renderNavigationLinks()}
            {auth.loggedIn() && (
              <NavLink
                exact
                to="/logout"
                onClick={handleLogout}
                className={classes.navLink}
                activeClassName="active"
                key="logout"
              >
                Logout
              </NavLink>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
