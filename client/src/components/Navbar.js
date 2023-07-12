import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import Logo from "./Logo";
import auth from "../utils/auth";

// import Logout from "./Logout"; 

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(5),
    padding: theme.spacing(7),
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    "&:hover, &:focus": {
      color: "#7FFFD4",
      borderBottom: "1px solid white",
    },
    "&.active": {
      color: "white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // const [isLoggedIn,setIsLoggedIn] = useState(false)
  console.log(auth.loggedIn())
  // useEffect(()=> {
  //   setIsLoggedIn(loggedIn())
  // },[isLoggedIn])
  const linkStyle = {
    color: "white",
  };

  const NavigationLinks = [
    <NavLink
      exact
      to="/login"
      className={classes.link}
      activeClassName="active"
      style={linkStyle}
      key="login"
    >
      Login
    </NavLink>,
    <NavLink
      exact
      to="/signup"
      className={classes.link}
      activeClassName="active"
      style={linkStyle}
      key="signup"
    >
      Signup
    </NavLink>,
    <NavLink
      exact
      to="/"
      className={classes.link}
      activeClassName="active"
      style={linkStyle}
      key="home"
    >
      Home
    </NavLink>,
    <NavLink
      exact
      to="/about"
      className={classes.link}
      activeClassName="active"
      style={linkStyle}
      key="about"
    >
      About
    </NavLink>,
    <NavLink
      exact
      to="/contact"
      className={classes.link}
      activeClassName="active"
      style={linkStyle}
      key="contact"
    >
      Contact
    </NavLink>,
    <NavLink
      exact
      to="/gallery"
      className={classes.link}
      activeClassName="active"
      style={linkStyle}
      key="gallery"
    >
      Items for trade
    </NavLink>,
    <NavLink
      exact
      to="/account"
      className={classes.link}
      activeClassName="active"
      style={linkStyle}
      key="account"
    >
      My Account
    </NavLink>,
    // <Logout key="logout" />, 
  ];
  const handleLogout = () => {
    auth.logout();
  };
  const logoutLink = <NavLink 
      exact
      onClick={handleLogout}
      className={classes.link}   
      activeClassName="active"
      style={linkStyle}
      key="account">
    Logout
  </NavLink>
console.log(NavigationLinks)
if(auth.loggedIn()) {
  NavigationLinks.splice(0,2,logoutLink)
}
  return (
    <AppBar position="static" style={{ backgroundColor: "#66b2b2" }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <Link to="/" className={classes.link}>
            <Logo className={classes.logo} />
          </Link>
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